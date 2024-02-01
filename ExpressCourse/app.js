const express=require('express');

const app=express();//expressjs is a function provided by Express.js framework. Calling this function returns an instance of an express application
//By creating an instance of an Express application and storing it in a variable (in this case, app), you can reference and configure the application throughout your codebase.
//Once you have an instance of an Express application (app), 
//you can use methods like app.use() to register middleware functions, define routes using methods like app.get() or app.post(), and configure other aspects of the application's behavior.


//get, post, put, delete
//IN expressjs routes are defined using app.get(1st argument,2nd argument)
//1st argument contains root URL path('/')
//2nd argument contains route handler function to be executed when a request matches the spexified path.



//creating array
const courses=[
   { id:1, name:'Nodejs'},
   { id:2, name:'Expressjs'},
   { id:3, name:'Javscript'}
]


app.get('/',(req,res)=>{
    res.send("Hello from Nikita")
})// it will execute without port but it can not be visible without port
//whenever we are developing with expressjs and nodejs we have to specify a port where all this will be going and that port will be your localhost port
app.get('/about',(req,res)=>{
    res.send("I am Nikita Modi and this my about page")
})

app.get('/contact',(req, res)=>{
    res.send("Hey This my contact number..")
})


//const port=3000;
//instead of having const port we can set any available port in environment
const port=process.env.PORT||3000;// if process.env.PORT is not defined or is falsy (such as null or undefined). If process.env.PORT is set (i.e., truthy), the value of port will be process.env.PORT. Otherwise, it will default to 3000. 


//Route Parameters
//getting courses by id
// app.get('/courses/:id',(req,res)=>{

//     //res.send(req.params.id);
//     let course= courses.find(course=> course.id === parseInt(req.params.id))
//     res.send(course);
// })

// we can search the course by name also
app.get('/courses/:coursename',(req,res)=>{

    //res.send(req.params.coursename);
    console.log(req.params.coursename)
    let course= courses.find(course=> course.name === req.params.coursename)
    res.send(course);
})


app.listen(port,()=>{
    console.log(`Port is running on ${port} check on browser`)
})