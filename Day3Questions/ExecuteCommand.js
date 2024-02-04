const {exec} = require('child_process');

function executeCommand(command) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
       
        console.log(`Command Output:\n${stdout}`);
    });
}

// Test Cases:
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');