const path = require('path');
const os = require('os');

function resolvePath(relativePath) {
    
    const absolutePath = path.resolve(os.homedir(), relativePath);

    console.log('Resolved Path:', absolutePath);
}

// Test Cases
resolvePath('../project/folder/file.txt'); 

resolvePath('nonexistent-folder/file.txt'); 