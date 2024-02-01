// Problem 1: File Reader
// Problem Statement: Create a function readFileContent(filePath) that takes
// the path to a file as input and reads its content asynchronously using 
// the fs module. The function should print the content to the console.

const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        } else {
            console.log('File Content:'+data);
            
        }
    });
}


// 1st Test Case
//readFileContent('test-files/file1.txt');
//2nd Test Case
//readFileContent('test-files/empty-file.txt');
//3rd Test Case
readFileContent('test-files/nonexistent-file.txt');