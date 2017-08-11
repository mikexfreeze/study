/**
 * Created by Micheal Xiao on 2017/7/4.
 */

var NodeGit = require("nodegit");

var cloneURL = "ssh://git@10.200.8.11:20022/genie-cloud/genie-docs.git";

var localPath = "md-files";

var cloneOptions = {};
cloneOptions.fetchOpts = {
    callbacks: {
        certificateCheck: function() { return 1; },
        credentials: function(url, userName) {
            return NodeGit.Cred.sshKeyFromAgent(userName);
        }
    }
};
// NodeGit.Clone("git@10.200.8.11:20022/genie-cloud/genie-docs.git", "md-files").then(function(repository) {
//     // Work with the repository object here.
// });

var cloneRepository = NodeGit.Clone(cloneURL, localPath, cloneOptions);
var errorAndAttemptOpen = function(err) {
    console.log(err)
    return NodeGit.Repository.open(local);
};
cloneRepository.catch(errorAndAttemptOpen)
    .then(function(repository) {
        // Access any repository methods here.
        console.log("Is the repository bare? %s", Boolean(repository.isBare()));
    },function () {
        console.log()
    });