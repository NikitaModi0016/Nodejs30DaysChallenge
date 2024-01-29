//child process is a node module used to create sub processes within a script
//You can perform different tasks with your script by just using some methods
const cp=require('child_process');
//cp.execSync('calc');//it will open calculator 
//cp.execSync('start chrome https://svmcm.wbhed.gov.in/')//It will start the chrome
console.log('output: '+cp.execSync('node Demo.js'))