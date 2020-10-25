var util  = require('util'),
    execSync = require('child_process').execSync;

execSync("git config --global user.email " + process.env.INPUT_USER_EMAIL);
execSync("git config --global user.name " + process.env.INPUT_USER_NAME);
console.log("this happened");
//execSync("git clone --single-branch --branch " + process.env.INPUT_DESTINATION_BRANCH + " \"https://" + process.env.API_TOKEN_GITHUB + "@github.com/$INPUT_DESTINATION_REPO.git" "$CLONE_DIR"
