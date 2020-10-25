var util  = require('util'),
    spawn = require('child_process').spawn,
    ls    = spawn('./entrypoint.sh'); // the second arg is the command 
                                          // options

ls.stdout.on('data', function (data) {    // register one or more handlers
  console.log('stdout: ' + data);
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('exit', function (code) {
  console.log('child process exited with code ' + code);
});
