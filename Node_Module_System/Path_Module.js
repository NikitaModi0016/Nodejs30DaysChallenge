const path=require('path');
let txt=path.extname('Node_Module_System/f1.txt');
console.log(txt);
let baseNAme=path.basename('D:\\NodeJS30DaysChallenge\\Node_Module_System\\f1.txt')//double the slashes to get the file name
console.log(baseNAme);
console.log(__filename);
console.log(__dirname);