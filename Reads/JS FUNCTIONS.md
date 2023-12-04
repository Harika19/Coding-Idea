JS


unshift - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

Splice - splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

Remove 1 element at index 3
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);

// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

Remove 1 element at index 2, and insert "trumpet"
const myFish = ["angel", "clown", "drum", "sturgeon"];
const removed = myFish.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]


Slice - 

 slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end. 
The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]





Shift - shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]




// BELOW BOTH CREATES NEW ARRAY 
FILTER:

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]



MAP:

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]


FROM:

 const res =  Array.from({length: matrix[0].length}, () => new Array(matrix.length).fill(0));


