const promiseOne=new Promise((resolve,reject)=>{
    console.log ("promise done");
})
promiseOne.then(()=>{
    console.log("result");
})

}