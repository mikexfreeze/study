/**
 * Created by Micheal Xiao on 2017/7/5.
 */
var Git = require("nodegit");

var getMostRecentCommit = function(repository) {
    return repository.getBranchCommit("master");
};

var getCommitMessage = function(commit) {
    return commit.message();
};

Git.Repository.open("./test-doc-server")
    .then(function (repo) {
        repo.fetchAll({
            callbacks: {
                credentials: function(url, userName) {
                    return Git.Cred.sshKeyFromAgent(userName);
                }
            }
        }).then(function() {
            repo.mergeBranches("master", "origin/master");
        }).catch(function(err) { console.log(err); });
    })


// Git.Repository.open("./tmp")
//     .then(getMostRecentCommit)
//     .then(getCommitMessage)
//     .then(function(message) {
//         console.log(message);
//     })
//     .catch(function(err) { console.log(err); });

// Git.Clone("https://github.com/nodegit/nodegit", "./tmp")
//     .then(function (repo) {
//         reop.open()
//             .then(getMostRecentCommit)
//             .then(getCommitMessage)
//             .then(function(message) {
//                 console.log(message);
//             });
//     })
//     .catch(function(err) { console.log(err); });


