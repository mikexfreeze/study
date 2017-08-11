/**
 * Created by Micheal Xiao on 2017/7/5.
 */
// Require in NodeGit, since we want to use the local copy, we"re using a
// relative path.  In your project, you will use:
//
var NodeGit = require("nodegit");
// var NodeGit = require("../../../");

// To clone with two factor auth enabled, you have to use a GitHub OAuth token
// over HTTPS.
var GITHUB_TOKEN = "4a3ada80337fa125b24f27dfc3af5ccc52ce104c";

// Using the `clone` method from the `Git.Clone` module, bring down the NodeGit
// test repository from GitHub.
var cloneURL = "https://github.com/mikexfreeze/test-doc-server.git";

// Ensure that the `tmp` directory is local to this file and not the CWD.
var localPath = require("path").join(__dirname, "tmp1");

// Simple object to store clone options.
var cloneOptions = {};

// This is a required callback for OS X machines.  There is a known issue
// with libgit2 being able to verify certificates from GitHub.
cloneOptions.fetchOpts = {
    callbacks: {
        certificateCheck: function() { return 1; },
        credentials: function() {
            return NodeGit.Cred.userpassPlaintextNew(GITHUB_TOKEN, "x-oauth-basic");
        }
    }
};

// Invoke the clone operation and store the returned Promise.
var cloneRepository = NodeGit.Clone(cloneURL, localPath, cloneOptions);

// If the repository already exists, the clone above will fail.  You can simply
// open the repository in this case to continue execution.
var errorAndAttemptOpen = function(err) {
    console.log(err)
    return NodeGit.Repository.open(localPath)
        .then(function (repo) {
            repo.fetchAll({
                credentials: function() {
                    return NodeGit.Cred.userpassPlaintextNew(GITHUB_TOKEN, "x-oauth-basic");
                }
            }).then(function() {
                repo.mergeBranches("master", "origin/master");
            });
        });
};

// Once the repository has been cloned or opened, you can work with a returned
// `Git.Repository` instance.
cloneRepository.catch(errorAndAttemptOpen)
    .then(function(repository) {
        // Access any repository methods here.
        console.log("Is the repository bare? %s", Boolean(repository.isBare()));
    });