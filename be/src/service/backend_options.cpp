// Copyright (c) 2017, Baidu.com, Inc. All Rights Reserved

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

#include "service/backend_options.h"

#include <algorithm>

#include <boost/algorithm/string.hpp>

#include "common/logging.h"
#include "common/status.h"
#include "util/network_util.h"
#include "util/cidr.h"

namespace palo {

static const std::string PRIORITY_CIDR_SEPARATOR = ";";

std::string BackendOptions::_s_localhost;
std::vector<CIDR> BackendOptions::_s_priority_cidrs;

bool BackendOptions::init() {
    if (!analyze_priority_cidrs()) {
        return false;
    }
    std::vector<InetAddress> hosts;
    Status status = get_hosts_v4(&hosts);

    if (!status.ok()) {
        LOG(FATAL) << status.get_error_msg();
        return false;
    }

    if (hosts.empty()) {
        LOG(FATAL) << "failed to get host";
        return false;
    }

    std::string loopback;
    std::vector<InetAddress>::iterator addr_it = hosts.begin();
    for (; addr_it != hosts.end(); ++addr_it) {
        if ((*addr_it).is_address_v4()) {
            VLOG(2) << "check ip=" << addr_it->get_host_address_v4();
            if ((*addr_it).is_loopback_v4()) {
                loopback = addr_it->get_host_address_v4();
            } else if (!_s_priority_cidrs.empty()) {
                if (is_in_prior_network(addr_it->get_host_address_v4())) {
                    _s_localhost = addr_it->get_host_address_v4();
                    break;
                }
            } else {
                _s_localhost = addr_it->get_host_address_v4();
                break;
            }
        }
    }

    if (_s_localhost.empty()) {
        LOG(INFO) << "fail to find one valid non-loopback address, use loopback address.";
        _s_localhost = loopback;
    }
    LOG(INFO) << "local host ip=" << _s_localhost;
    return true;
}

std::string BackendOptions::get_localhost() {
    return _s_localhost;
}

bool BackendOptions::analyze_priority_cidrs() {
    if (config::priority_networks == "") {
        return true;
    }
    LOG(INFO) << "priority cidrs in conf: " << config::priority_networks;

    std::vector<std::string> cidr_strs;
    boost::split(cidr_strs, config::priority_networks, boost::is_any_of(PRIORITY_CIDR_SEPARATOR));

    for (auto& cidr_str : cidr_strs) {
        CIDR cidr;
        if (!cidr.reset(cidr_str)) {
            LOG(FATAL) << "wrong cidr format. cidr_str=" << cidr_str;
            return false;
        }
        _s_priority_cidrs.push_back(cidr);
    }
    return true;
}

bool BackendOptions::is_in_prior_network(const std::string& ip) {
    for (auto& cidr : _s_priority_cidrs) {
        if (cidr.contains(ip)) {
            return true;
        }
    }
    return false;
}

}