// spread operator = ...
function sum(...args){
    return args.reduce((acc, curr)=> acc+curr, 0);

}
console.log(sum(1,2,3,4));

const[first, ...rest]= [1,2,3,4];
console.log(first);
console.log(rest);

let promise1 = new Promise((resolve, reject)=>{
    let condition = true;
    if(condition){
        resolve("Hey, resolved");
    }else{
        reject("Oh no rejected");
    }
});

promise1.then((result)=>{
    console.log("result", result);
})

const express = require('express');
const app = express();
const PORT = 3000;
middleware();
app.get('/', (req,res)=>{
    res.send('Hello world');
})
app.listen(PORT,()=>{
    console.log("server is running at 3000");
})

// 2 round - study suggestions 

1. In-depth memory leakage 
2. Thread pooling  and clustering with child [processing 
3. HA and fault tolerance 
