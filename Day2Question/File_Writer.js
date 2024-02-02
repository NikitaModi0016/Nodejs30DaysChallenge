const fs = require('fs');
const path = require('path');

function writeToFile(filePath, content) {
    const fileName = path.basename(filePath);
    fs.writeFile(filePath, content, 'utf8',(err) => {
        if (err) {
            console.error(`Error writing to file ${fileName}: ${err.message}`);
        } else {
            console.log(`Data written to ${fileName}`);
        }
    });
}

// Test Cases
writeToFile('test-files/output1.txt', 'Sample content.');
writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');