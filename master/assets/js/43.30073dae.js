(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{436:function(e,t,a){"use strict";a.r(t);var s=a(33),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"code-submission-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-submission-guide"}},[e._v("#")]),e._v(" Code Submission Guide")]),e._v(" "),a("p",[e._v("[Pull Request (PR)] (https://help.github.com/articles/about-pull-requests/) can be easily submitted on [Github] (https://github.com/apache/incubator-doris). The PR method of Doris project is described below.")]),e._v(" "),a("h2",{attrs:{id:"fork-repository"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fork-repository"}},[e._v("#")]),e._v(" Fork Repository")]),e._v(" "),a("p",[e._v("Go to the [github page] (https://github.com/apache/incubator-doris) of apache/incubator-doris , and click the button "),a("code",[e._v("Fork")]),e._v(" in the upper right corner for Fork.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/fork-repo.png"),alt:"Fork"}}),e._v(" "),a("h3",{attrs:{id:"_2-configuring-git-and-submitting-modifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-configuring-git-and-submitting-modifications"}},[e._v("#")]),e._v(" 2. Configuring GIT and submitting modifications")]),e._v(" "),a("h4",{attrs:{id:"_1-clone-the-code-locally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-code-locally"}},[e._v("#")]),e._v(" (1) Clone the code locally:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/<your_github_name>/incubator-doris.git\n")])])]),a("p",[e._v("Note: Please replace your GitHub name with your yourgithubname\\\\\\\\\\\\\\.")]),e._v(" "),a("p",[e._v("When clone is completed, origin defaults to the remote fork address on github.")]),e._v(" "),a("h4",{attrs:{id:"_2-add-apache-incubator-doris-to-the-remote-branch-upstream-of-the-local-warehouse"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-apache-incubator-doris-to-the-remote-branch-upstream-of-the-local-warehouse"}},[e._v("#")]),e._v(" (2) Add apache/incubator-doris to the remote branch upstream of the local warehouse:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd  incubator-doris\ngit remote add upstream https://github.com/apache/incubator-doris.git\n")])])]),a("h4",{attrs:{id:"_3-check-remote-warehouse-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-check-remote-warehouse-settings"}},[e._v("#")]),e._v(" (3) Check remote warehouse settings:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git remote -v\norigin https://github.com/<your_github_name>/incubator-doris.git (fetch)\norigin    https://github.com/<your_github_name>/incubator-doris.git (push)\nupstream  https://github.com/apache/incubator-doris.git (fetch)\nupstream  https://github.com/apache/incubator-doris.git (push)\n")])])]),a("h4",{attrs:{id:"_4-new-branches-to-modify-them"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-new-branches-to-modify-them"}},[e._v("#")]),e._v(" (4) New branches to modify them:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout -b <your_branch_name>\n")])])]),a("p",[e._v("Note:  <your_branch_name> name is customized for you.")]),e._v(" "),a("p",[e._v("Code changes can be made after creation.")]),e._v(" "),a("h4",{attrs:{id:"_5-submit-code-to-remote-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-submit-code-to-remote-branch"}},[e._v("#")]),e._v(" (5) Submit code to remote branch:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('git commit -a -m "<you_commit_message>"\ngit push origin <your_branch_name>\n')])])]),a("p",[e._v("For more git usage, please visit: [git usage] (https://www.atlassian.com/git/tutorials/set-up-a-repository), not to mention here.")]),e._v(" "),a("h3",{attrs:{id:"_3-create-pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-pr"}},[e._v("#")]),e._v(" 3. Create PR")]),e._v(" "),a("h4",{attrs:{id:"_1-new-pr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-new-pr"}},[e._v("#")]),e._v(" (1) New PR")]),e._v(" "),a("p",[e._v("Switch to your GitHub page in the browser, switch to the submitted branch yourbranchname\\ and click the "),a("code",[e._v("New pull request")]),e._v(" button to create it, as shown in the following figure:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/new-pr.png"),alt:"new PR"}}),e._v(" "),a("h4",{attrs:{id:"_2-preparation-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-preparation-branch"}},[e._v("#")]),e._v(" (2) preparation branch")]),e._v(" "),a("p",[e._v("At this time, the "),a("code",[e._v("Create pull request")]),e._v(" button will appear. If not, please check whether the branch is selected correctly or click on `compare across forks' to re-select the repo and branch.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images//create-pr.png"),alt:"create PR"}}),e._v(" "),a("h4",{attrs:{id:"_3-fill-commit-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-fill-commit-message"}},[e._v("#")]),e._v(" (3) Fill Commit Message")]),e._v(" "),a("p",[e._v("Here, please fill in the summary and details of the comment, and then click "),a("code",[e._v("Create pull request")]),e._v(" to create it.")]),e._v(" "),a("p",[e._v("For how to write Commit Message, here are some Tips:")]),e._v(" "),a("ul",[a("li",[e._v("Please use the form of English verb + object. The verb does not use the past tense and the sentence uses imperative sentence.")]),e._v(" "),a("li",[e._v("Subject and body should be written, and they should be separated by blank lines (fill in separately on GitHub PR interface).")]),e._v(" "),a("li",[e._v("Message topic length should not exceed "),a("strong",[e._v("50")]),e._v(" characters;")]),e._v(" "),a("li",[e._v("Message content should not exceed "),a("strong",[e._v("72")]),e._v(" characters per line, and the excess should be replaced manually.")]),e._v(" "),a("li",[e._v("Message content is used to explain what has been done, why and how.")]),e._v(" "),a("li",[e._v("The first letter of the message subject should be "),a("strong",[e._v("capitalized")]),e._v(", and the end of the sentence "),a("strong",[e._v("should not")]),e._v(" have a full stop.")]),e._v(" "),a("li",[e._v("The message content specifies the associated issue (if any), such as # 233;")])]),e._v(" "),a("p",[e._v("For more details, see "),a("a",{attrs:{href:"https://chris.beams.io/posts/git-commit",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://chris.beams.io/posts/git-commit"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/create-pr2.png"),alt:"create PR"}}),e._v(" "),a("h4",{attrs:{id:"_4-complete-the-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-complete-the-creation"}},[e._v("#")]),e._v(" (4) Complete the creation")]),e._v(" "),a("p",[e._v("After successful creation, you can see that Doris project needs review, you can wait for us to review and join, you can also contact us directly.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/images/create-pr3.png"),alt:"create PR"}}),e._v(" "),a("p",[e._v("So far, your PR creation is complete. Read more about PR [collaborating-with-issues-and-pull-requests] (https://help.github.com/categories/collaborating-with-issues-and-pull-requests/).")]),e._v(" "),a("h3",{attrs:{id:"_4-conflict-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-conflict-resolution"}},[e._v("#")]),e._v(" 4. Conflict Resolution")]),e._v(" "),a("p",[e._v("When submitting PR, code conflicts are usually caused by multiple people editing the same file. The main steps to resolve conflicts are as follows:")]),e._v(" "),a("h4",{attrs:{id:"_1-switch-to-the-main-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-switch-to-the-main-branch"}},[e._v("#")]),e._v(" (1) Switch to the main branch")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout master\n")])])]),a("h4",{attrs:{id:"_2-synchronize-remote-main-branch-to-local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-synchronize-remote-main-branch-to-local"}},[e._v("#")]),e._v(" (2) Synchronize remote main branch to local")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git pull upstream master\n")])])]),a("h4",{attrs:{id:"_3-switch-back-to-the-previous-branch-assuming-the-branch-is-named-fix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-switch-back-to-the-previous-branch-assuming-the-branch-is-named-fix"}},[e._v("#")]),e._v(" (3) Switch back to the previous branch (assuming the branch is named fix)")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git checkout fix\n")])])]),a("h4",{attrs:{id:"_4-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-rebase"}},[e._v("#")]),e._v(" (4) rebase")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git rebase -i master\n")])])]),a("p",[e._v("At this point, a file that modifies the record will pop up and can be saved directly. Then, we will prompt which files have conflicts. At this time, we can open the conflict file to modify the conflict part. After all the conflicts of the conflict files are resolved, we will execute them.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git add .\ngit rebase --continue\n")])])]),a("p",[e._v("Then you can go back and forth until the screen appears something like * rebase successful * and then you can update the branch that submitted PR:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git push -f origin fix\n")])])]),a("h3",{attrs:{id:"_5-an-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-an-example"}},[e._v("#")]),e._v(" 5. An example")]),e._v(" "),a("h4",{attrs:{id:"_1-fetch-to-the-latest-code-for-the-local-branch-of-upstream-that-has-been-configured"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-fetch-to-the-latest-code-for-the-local-branch-of-upstream-that-has-been-configured"}},[e._v("#")]),e._v(" (1) fetch to the latest code for the local branch of upstream that has been configured")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git branch\n* master\n\n$ git fetch upstream          \nremote: Counting objects: 195, done.\nremote: Compressing objects: 100% (68/68), done.\nremote: Total 141 (delta 75), reused 108 (delta 48)\nReceiving objects: 100% (141/141), 58.28 KiB, done.\nResolving deltas: 100% (75/75), completed with 43 local objects.\nFrom https://github.com/apache/incubator-doris\n   9c36200..0c4edc2  master     -> upstream/master\n")])])]),a("h4",{attrs:{id:"_2-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rebase"}},[e._v("#")]),e._v(" (2) rebase")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git rebase upstream/master\nFirst, rewinding head to replay your work on top of it...\nFast-forwarded master to upstream/master.\n")])])]),a("h4",{attrs:{id:"_3-check-to-see-if-other-submissions-are-not-synchronized-to-their-own-repo-submissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-check-to-see-if-other-submissions-are-not-synchronized-to-their-own-repo-submissions"}},[e._v("#")]),e._v(" (3) Check to see if other submissions are not synchronized to their own repo submissions")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git status\n# On branch master\n# Your branch is ahead of \'origin/master\' by 8 commits.\n#\n# Untracked files:\n#   (use "git add <file>..." to include in what will be committed)\n#\n#       custom_env.sh\nnothing added to commit but untracked files present (use "git add" to track)\n')])])]),a("h4",{attrs:{id:"_4-merge-code-submitted-by-others-into-their-own-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-merge-code-submitted-by-others-into-their-own-repo"}},[e._v("#")]),e._v(" (4) Merge code submitted by others into their own repo")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git push origin master\nCounting objects: 195, done.\nDelta compression using up to 32 threads.\nCompressing objects: 100% (41/41), done.\nWriting objects: 100% (141/141), 56.66 KiB, done.\nTotal 141 (delta 76), reused 140 (delta 75)\nremote: Resolving deltas: 100% (76/76), completed with 44 local objects.\nTo https://lide-reed:fc35ff925bd8fd6629be3f6412bacee99d4e5f97@github.com/lide-reed/incubator-doris.git\n   9c36200..0c4edc2  master -> master\n")])])]),a("h4",{attrs:{id:"_5-new-branch-ready-for-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-new-branch-ready-for-development"}},[e._v("#")]),e._v(" (5) New branch, ready for development")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git checkout -b my_branch\nSwitched to a new branch 'my_branch'\n\n$ git branch\n  master\n* my_branch\n")])])]),a("h4",{attrs:{id:"_6-prepare-to-submit-after-code-modification-is-completed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-prepare-to-submit-after-code-modification-is-completed"}},[e._v("#")]),e._v(" (6) Prepare to submit after code modification is completed")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git add -u\n")])])]),a("h4",{attrs:{id:"_7-fill-in-the-message-and-submit-it-it-to-the-new-local-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-fill-in-the-message-and-submit-it-it-to-the-new-local-branch"}},[e._v("#")]),e._v(" (7) Fill in the message and submit it it to the new local branch")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ git commit -m "Fix a typo"\n[my_branch 55e0ba2] Fix a typo\n1 files changed, 2 insertions(+), 2 deletions(-)\n')])])]),a("h4",{attrs:{id:"_8-push-the-branch-into-github-s-own-repo-far-away"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-push-the-branch-into-github-s-own-repo-far-away"}},[e._v("#")]),e._v(" (8) Push the branch into GitHub's own repo far away")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ git push origin my_branch\nCounting objects: 11, done.\nDelta compression using up to 32 threads.\nCompressing objects: 100% (6/6), done.\nWriting objects: 100% (6/6), 534 bytes, done.\nTotal 6 (delta 4), reused 0 (delta 0)\nremote: Resolving deltas: 100% (4/4), completed with 4 local objects.\nremote: \nremote: Create a pull request for 'my_branch' on GitHub by visiting:\nremote:      https://github.com/lide-reed/incubator-doris/pull/new/my_branch\nremote: \nTo https://lide-reed:fc35ff925bd8fd6629be3f6412bacee99d4e5f97@github.com/lide-reed/incubator-doris.git\n * [new branch]      my_branch -> my_branch\n")])])]),a("p",[e._v("At this point, you can create PR according to the previous process.")])])}),[],!1,null,null,null);t.default=r.exports}}]);