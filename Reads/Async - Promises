https://www.geeksforgeeks.org/difference-between-promise-and-async-await-in-node-js/?ref=rp
//Async/await  :

const asyncAwait = async () => {
  const res = await fetch('..');
  const data = await res.json()
}

asyncAwait().then(res => {
  console.log(res)
}).catch(err => {
  console.log('errr', err)
})


//Promise


const Prom = new Promise(resolve, reject)=> {
  if(true){
    resolve('yayyy')
  }else{
    reject('oh noo')
  }
}

Prom.then(res => {
  console.log(res)
}).catch(err => {
  console.log('errr', err)
}) 


---------------------------------------------------------------------------

Promise Methods:: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all


Promise.all() -  returned promise fulfills when all of the input's promises fulfill .It rejects when any of the input's promises rejects, with this first rejection reason.

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Expected output: Array [3, 42, "foo"]

 ————————————————————————————————————————————————————————————

Promise.allSettled() - returned promise fulfills when all of the input's promises settle with an array of objects that describe the outcome of each promise

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((results) => results.forEach((result) => console.log(result.status)));

// Expected output:
// "fulfilled"
// "rejected"

 ————————————————————————————————————————————————————————————

Promise.race() - returned promise settles with the eventual state of the first promise that settles.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"
 ———————————————————————————————————————————————————————————— 
