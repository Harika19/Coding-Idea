// spread operator = ...
// function sum(...args){
//     return args.reduce((acc, curr)=> acc+curr, 0);

// }
// console.log(sum(1,2,3,4));

// const[first, ...rest]= [1,2,3,4];
// console.log(first);
// console.log(rest);

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