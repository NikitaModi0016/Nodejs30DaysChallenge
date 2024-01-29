//files
const fs=require('fs');

//CRUD file

//reading a file
// let fileContent=fs.readFileSync('f2.txt');
// console.log("Data of file 2->"+fileContent)

//writing into the file or creating file

//if the file name that is passed doesnot exist a new file will be created with its name and the data will be witten on that file
// fs.writeFileSync('f2.txt','This is file2 and it has been changed.')
// console.log("f2 has been written got and check:")

// //Update a file or append a file
// fs.appendFileSync('f3.txt',' Hey I am updated..')
// console.log('File has been updated check f3')

//deleting a file
// fs.unlinkSync('f2.txt')
// console.log('File has been deleted')








//Directories
//Create Directory
// fs.mkdirSync('myDirectory')
// Console.log("Directory has been created..")

//check the content inside of a directory
// let folderPath='D:\\NodeJS30DaysChallenge\\Node_Module_System\\myDirectory'
// let folderContent=fs.readdirSync(folderPath);
// console.log("Folder Content ",folderContent)


//check whether the particular directory exist or not
// let doesExist=fs.existsSync('myDirectory')
// console.log(doesExist)
// let doesExist1=fs.existsSync('f4.txt')
// console.log(doesExist1+" means Does not exists")


//Deleting a Directory(Befor edeleting any directory you have to delete all the content of that directory)
// fs.rmdirSync('MyDirectory');
// Console.log("The directory is deleted")