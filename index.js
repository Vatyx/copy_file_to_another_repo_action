var util  = require('util'),
    execSync = require('child_process').execSync;

execSync("git config --global user.email " + process.env.INPUT_USER_EMAIL);
execSync("git config --global user.name " + process.env.INPUT_USER_NAME);
console.log("this happened");

let temp = execSync(`mktemp -d`).toString();

let clone = `git clone --single-branch --branch ${process.env.INPUT_DESTINATION_BRANCH} "https://${process.env.API_TOKEN_GITHUB}@github.com/${process.env.INPUT_DESTINATION_REPO}.git"`
execSync(clone);

//execSync(`mkdir -p .//${process.env.INPUT_DESTINATION_FOLDER}`)
execSync(`cp -R ${process.env.INPUT_SOURCE_FILE} ${process.env.INPUT_DESTINATION_REPO}"`)

execSync(`git add .`)
execSync(`git commit --message "Update from https://github.com/${process.env.GITHUB_REPOSITORY}/commit/${process.env.GITHUB_SHA}"`)
execSync(`echo "Pushing git commit"`)
execSync(`git push -u origin HEAD:${process.env.OUTPUT_BRANCH}`)
