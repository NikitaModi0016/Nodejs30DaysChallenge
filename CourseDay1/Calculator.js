function add(a,b){
    console.log("Addition:",a+b);
}
function mul(a,b){
    console.log("Multiplication: ",a*b);
}
function div(a,b){
    console.log("Division: ",a/b);
}
function sub(a,b){
    console.log("Subtraction: ",a-b);
}

module.exports={
    addition : add,
    multiplication : mul,
    division : div,
    subtraction : sub
};