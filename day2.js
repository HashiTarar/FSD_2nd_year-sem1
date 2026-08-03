// //synchronous code and asynchronous programming 

// function sum(n1,n2){
//     console.log("Hello World!");
// }
// Hello();
// console.log("This is synchronous programming ");
// const hello = () => {
//     setTimeout(() => {
//         console.log("Hello World!");
//     }, 1000);
// }
// console.log("This is asynchronous programming ");

// function add(n1,n2,callback){
//     console.log(n1+n2);
//     callback();
// }
// let a = 10;
// let b = 20;
// add(a,b,sayHi);
// function sayHi(){
//     console.log("this is callback function");
// }
// function add(n1,n2,hello){
//     console.log(n1+n2);
//     hello();
// }
// let a = 10;
// let b = 20;
// add(a,b,hi);
// function hi(){
//     console.log("this is hello function");
// }
//create a function display(callback) that print "welocome to ABES",then call calllback which print learning "FSD"
function display(callback){
    console.log("Welcome to ABES");
    callback();
}
function learning(){
    console.log("learning FSD");
}
display(learning);