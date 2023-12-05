const obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    let path1 = path.split('.')
    // console.log(path1)
    let curr = object;
    for(let i=0;i<path1.length;i++){
        if(curr[path1[i]] == null){
            return undefined
        }else{
            curr = curr[path1[i]]
        } 
    }
    return curr;
};

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.k.j')); // undefined

console.log(typeof(undefined), typeof(null))



/* 

1.  difference between arrow and normal function 

* Arrow functions do not have their own this binding.
* Normal functions have their own this binding, and the value of this is dynamic, depending on how the function is called.

* Arrow functions cannot be used as constructors with the new keyword
* Normal functions can be used as constructors, and when invoked with new, they create a new object and assign it to this.

* Arrow functions do not have a prototype property.
* Normal functions have a prototype property, which is used when creating objects with the new keyword.


* Arrow functions do not have their own arguments object. If you need to access the arguments, you would use rest parameters (...args).
const arrowFunction = (...args) => {
  console.log(args);
};

arrowFunction(1, 'two', true); // Outputs: [1, 'two', true]

*  Normal functions automatically have an arguments object, which is an array-like object containing all passed arguments.

javascript
Copy code
function normalFunction() {
  console.log(arguments);
}

normalFunction(1, 'two', true); // Outputs: [1, 'two', true]


2.  return statement to break for each loop

3.  diff between map and foreach

foreach:
* It doesn't create a new array; instead, it's used for performing a side effect (such as logging, updating variables, etc.) for each element of the array.
* If you modify the elements of the array inside the forEach callback, the original array will be affected.

map:
map is used for creating a new array by applying a function to each element of the existing array.
map is used for creating a new array based on the transformation of each element of the original array.


*/
