NODE JS , DesignPattern
‘’

https://github.com/learning-zone/nodejs-basics#-7-nodejs-streams


A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function. Let's see what makes a function pure in detail:
* The return value of the function on the function call should only be dependent on the input function arguments.



HTTP is a contract, a communication protocol and REST is a concept, an architectural style which may use HTTP, FTP or other communication protocols but is widely used with HTTP.
REST IS APPROACH R SET OF PRINCIPLES , how Server and Client should interacT.
What is Rest -
1- Client-server
2- Stateless
3- Cacheable
4- Layered system
5- Code on demand
6- Uniform interface





GARBAGE COLLECTION - https://nodejs.org/en/docs/guides/diagnostics/memory/using-gc-traces

How to monitor memory & GC?
V8 module
The v8 module exposes APIs that are specific to the version of V8 built into the Node.js binary
There are 2 important methods in this module :
* 		v8.getHeapStatistics() : global memory overview
* 		v8.getHeapSpaceStatistics() : memory split by space (new, old, …)





Node.js, in its essence, is a single thread process. It does not expose child threads and thread management methods to the developer. js does spawn child threads for certain tasks such as asynchronous I/O, but these run behind the scenes and do not execute any application JavaScript code, nor block the main event loop.



libuv is a multi-platform support library with a focus on asynchronous I/O

JavaScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.

devDependencies are modules which are only required during development, while dependencies are modules which are also required at runtime
Dependency is a library, which your project requires for production environments and functioning effectively.


export NODE_ENV=production
NODE_ENV=production node app.js


if (process.env.NODE_ENV === 'development') {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.errorHandler());
}




TS - static type definitions,


1. Creational Design Pattern
2. Structural Design Pattern
3. Behavioral Design Pattern.
* Creational Design Pattern: The object generation mechanism is addressed by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.
* Structural Design Pattern: The JavaScript Structural Design Pattern explains how the classes and objects we've generated so far can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so.
* Behavioral Design Pattern: This design pattern highlights typical patterns of communication between objects in JavaScript. As a result, the communication may be carried out with greater freedom.








- We use JS mainly to write scripts on a website that makes web pages more dynamic in nature. It is a runtime environment for Javascript that lets a user run this programming language on the server-side as well. We can only run JS on browsers. NodeJS helps us run JS outside the browser as well.

-	4. How is Node.js better than other frameworks most popularly used?
* Node.js provides simplicity in development because of its non-blocking I/O and even-based model results in short response time and concurrent processing, unlike other frameworks where developers have to use thread management.   
* It runs on a chrome v8 engine which is written in c++ and is highly performant with constant improvement.   
* Also since we will use Javascript in both the frontend and backend the development will be much faster.   
* And at last, there are ample libraries so that we don’t need to reinvent the wheel.



-	6. What are some commonly used timing features of Node.js?
* setTimeout/clearTimeout – This is used to implement delays in code execution.
* setInterval/clearInterval – This is used to run a code block multiple times.
* setImmediate/clearImmediate – Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of the event loop.
* process.nextTick – Both setImmediate and process.nextTick appear to be doing the same thing; however, you may prefer one over the other depending on your callback’s urgency. 



- 7. What are the advantages of using promises instead of callbacks?
The main advantage of using promise is you get an object to decide the action that needs to be taken after the async task completes. This gives more manageable code and avoids callback hell.


-	A fork in general is used to spawn child processes. In node it is used to create a new instance of v8 engine to run multiple workers to execute the code.


- 9. Why is Node.js single-threaded?
Node.js was created explicitly as an experiment in async processing. This was to try a new theory of doing async processing on a single thread over the existing thread-based implementation of scaling via different frameworks.


- REPL - Read, Eval, Print, and Loop, which further means evaluating code on the go.
programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. 


- 10. How do you create a simple server in Node.js that returns Hello World?
var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000);




- Blocking methods execute synchronously and non-blocking methods execute asynchronously.
- Reading file system -> syn(blocking ) 
- Db calls -> non blocking


- The process has its own memory space on other hand, threads use the shared memory space. Thread is part of the process.



Promises are used to handle asynchronous operations in javascript.




mdn 
how class works


	js prototypcal inheritence - https://www.google.com/search?q=js+prototype+vs+class&rlz=1C5CHFA_enIN1007IN1008&biw=1728&bih=969&tbm=vid&sxsrf=AJOqlzWnF91GqD6GyfwIIK6-zFxbzOO5jA%3A1675358082264&ei=gu_bY8fuD-KbseMPluStsAk&oq=js+proto&gs_lcp=Cg1nd3Mtd2l6LXZpZGVvEAMYATIFCAAQkQIyBQgAEJECMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgjEK4CECc6CwgAEIAEELEDEIMBOgcIABCxAxAKOggIABCABBCxAzoLCAAQsQMQgwEQkQI6BAgAEEM6BwgAELEDEEM6CggAELEDEIMBEEM6CAgAELEDEIMBUNgJWIEWYOolaABwAHgAgAGeAogBpxCSAQUwLjEuOJgBAKABAcABAQ&sclient=gws-wiz-video#fpstate=ive&vld=cid:f384563d,vid:XoQKXDWbL1M



closure-> inner functions have access to the variables of outer functions
A closure is a function having access to the parent scope, even after the parent function has closed.
Global variables can be made local (private) with closures.



how strict mode runs.- 
Strict mode changes previously accepted "bad syntax" into real errors. As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable.




private implementation without classes - module.export



How Hashmap works internally ?



write own map in JS.
arr.mymap -> should return double of that elemetn,s. /// write own implementation of map

```
function map(arr, mapFunc) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFunc(arr[i]);
    console.log('result', result)
    mapArr.push(result);
  }
  return mapArr;
}
let arr = [1, 2, 3, 4, 5];
const squareArr2 = map(arr, num => num ** 2);
console.log(squareArr2); 
```




data migration, database migration // manifest of db
https://en.wikipedia.org/wiki/Schema_migration

 A schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version.
Schema migration tooling could be seen as a facility to track the history of an evolving schema.


generators, iterator - https://www.google.com/search?q=generators+in+js&rlz=1C5CHFA_enIN1007IN1008&sxsrf=AJOqlzWK5WvFRBG86vcG4SBaoFj5HFCdeQ:1675430498259&source=lnms&tbm=vid&sa=X&ved=2ahUKEwjr_cb9uPn8AhXFLkQIHVwSBt0Q_AUoAnoECAEQBA&biw=1728&bih=969&dpr=2#fpstate=ive&vld=cid:2a415dbd,vid:Ojis8iFIjDQ

In JavaScript, generators provide a new way to work with functions and iterators. Using a generator, you can stop the execution of a function from anywhere inside the function. and continue executing code from a halted position.
Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. Generator functions are written using the function* syntax.
```
function* gen(){
    yield '2222x'
    yield '3333'
    yield '44444'
    return '7777';
}

var ob1 = gen();
console.log(ob1.next())
console.log(ob1.next())
console.log(ob1.next())
console.log(ob1.next())
`````


JavaScript .prototype work ?





asynchronous works
eventloop - promises , syttimeouts, event handlers 

This keyword 

Closure 

how jwt works
why jwt requires.
expired token, refresh token 

function and arrow function in javascript diff
how js prototype works  internally convert to class

Collection framework 

Call, bind , apply 


Trees 
graphs 
Linked list middle ele

https://nodejs.dev/en/learn/understanding-setimmediate/

Order - process.nextTick() > promises (micro task queue) > setImmediate](micro task queue) > [setTimeout(0 ms)

setImmediate() argument is a callback that's executed in the next iteration of the event loop.
process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.



const Person = (name) => {
  console.log("hello");
};

const person = new Person("John");
console.log(person.name);

// CANNOT USE NEW IN ARROW FUNCTIONS



A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

function greeting(name) {
  alert(`Hello, ${name}`);
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting);

//output:
Please enter your name.> Gowthy
Hello, Gowthy 




----------------------------------------------------------


DESIGN PATTERNS:


design pattern - Design patterns are typical solutions to commonly occurring problems in software design. They are like pre-made blueprints that you can customize to solve a recurring design problem in your code.
* Creational patterns provide object creation mechanisms that increase flexibility and reuse of existing code.
* Structural patterns explain how to assemble objects and classes into larger structures, while keeping these structures flexible and efficient.
* Behavioral patterns take care of effective communication and the assignment of responsibilities between objects.



SOLID PRINCIPLES :

Single responsibility - class should have singe responsibility so better create different classes for each functionality rather than having lot of functions with diff functionality in same class

OPEN AND CLOSE - CLASS ARE OPEN FOR EXTENSION (USE INHERITANCE ) BUT CLOSED FOR MODIFICATION
Array of values

Linskow substitution - base class , derived class break the functionality of base class. a subclass should override the parent class methods in a way that does not break functionality from a client’s point of view.

bird(){
Fly
}

Penguin extends bird {
wrong=======
}

INTERFACE SEGREGATION PRINCIPLE:  segregate interfaces you need ( ex= have separate function for scan , print ). Don’t put too much into single interface rather split it into separate interfaces

For every user no need to validate / initiate - based on flag u can do that


DEPENDANCY INVERSION PRINCIPLE - high level modules should not depend on low levels modules instead should use abstracions

Remote  needs battery but not the brand of battery (loosely coupled)


-----------------------------------------------------------------------------------------------


DBMS:



4. Construct a new table with data and structure that are copied from the existing table ‘Employee’ by writing a query. The name of the new table should be ‘SampleTable’.
SELECT * INTO SampleTable FROM Employee WHERE 1 = 0


5. Construct an SQL query to find the names of employees whose first names start with "S".
SELECT * FROM Employee WHERE fname LIKE 'S%';


7. Construct an SQL query to retrieve all employees who are also managers.
SELECT emp.fname, emp.lname, sal.position 
FROM Employee emp INNER JOIN Salary sal ON
emp.id = sal.id AND sal.position IN ('Manager');


Inner join:

SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;






9. Construct an SQL query to retrieve duplicate records from the Employee table.
SELECT id, fname, department, COUNT(*) as Count
FROM Employee GROUP BY id, fname, department 
HAVING COUNT(*) > 1;

SQL Query Interview Questions for Experienced

-----------------------------------------------------------------------------------------------

JS:



There are 7 primitive data types:
* string.
* number.
* bigint.
* boolean.
* undefined.
* symbol.
* null

NON-PRIMITIVE:
OBJECTS - strings , arrays ..



var multiply2Strings = function(num1, num2) {
    return '' + (BigInt(num1)*BigInt(num2))
};


Map 
Set
Poly fills
Transfixes


A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.



-----------------------------------------------------------------------------------------------



EVENT EMITTER AND LIBUV

Events are synchronous and blocking.

EventEmitter is a class that helps us create a publisher-subscriber pattern in NodeJS.

With an event emitter, we can simply raise a new event, and a listener will listen to the raised event and have some action performed for the event.


* emit is used to trigger an event
* on is used to add a callback function that's going to be executed when the event is triggered
* once(): add a one-time listener
* removeListener() / off(): remove an event listener from an event
* removeAllListeners(): remove all listeners for an event



FILES 

A file descriptor is a reference to an open file, a number (fd) returned by opening the file using the open() m
The fs.readFile() method is used to read files on your computer.
* fs.appendFile()
* fs.open()
* fs.writeFile()


LIBUV


libuv is a C library that is used to abstract non-blocking I/O operations to a consistent interface across all supported platforms. It provides mechanisms to handle file system, DNS, network, child processes, pipes, signal handling, polling and streaming. It also includes a thread pool for offloading work for some things that can't be done asynchronously at the operating system level.

V8 converts JavaScript to machine code, libuv asynchronously performs IO operations.



The Buffer class in Node.js is designed to handle raw binary data. Each buffer corresponds to some raw memory allocated outside V8. Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.



Chanining is a mechanism to connect output of one stream to another stream and create a chain of multiple stream operations. It is normally used with piping operations.


STREAMS:

stream is an abstract interface for working with streaming data in Node.js.

advantages:
* Memory efficiency: you don't need to load large amounts of data in memory before you are able to process it
* Time efficiency: it takes way less time to start processing data, since you can start processing as soon as you have it, rather than waiting till the whole data payload is available


There are 4 types of streams in Node.js:

Writable - fs.createWriteStream() lets us write data to a file using streams.
Readable - fs.createReadStream() lets us read the contents of a file.
Duplex - BOTH READ AND WRITE - net.Socket
Transform - TRANSFORM DATA - FILE COMPRESSION



process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});



-------------------------------------------------------------------------------------------------------



Design pattern we use



1. Creational Design Pattern
2. Structural Design Pattern
3. Behavioral Design Pattern.
* Creational Design Pattern: The object generation mechanism is addressed by the JavaScript Creational Design Pattern. They aim to make items that are appropriate for a certain scenario.
* Structural Design Pattern: s how the classes and objects  can be combined to construct bigger frameworks. This pattern makes it easier to create relationships between items by defining a straightforward way to do so.
* Behavioral Design Pattern: This design pattern highlights typical patterns of communication between objects in JavaScript. As a result, the communication may be carried out with greater freedom.


Adapter  a-b,b-a, switch and socket 
Output of a = input of B

vISITOR - LF USE VISITOR 

DECORATOR - ERR HANDLING
OBSERVER 

GANG OF 4 JS 




abstract - just structire u will declare in abstract class
Cannot create obj for this class



Singleton can be recognized by a static creation method, which returns the same cached object

class Singleton {
    private static instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public someBusinessLogic() {
        // ...
    }
}

/**
 * The client code.
 */
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode(); 





Abstract - tea flavours 
Abstract Factory defines an interface for creating all distinct products but leaves the actual product creation to concrete factory classes. Each factory type corresponds to a certain product variety.
Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.


Factory method 
Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- is a creational design pattern which solves the problem of creating product objects without specifying their concrete classes.
The Factory Method defines a method, which should be used for creating objects instead of using a direct constructor call (new operator). Subclasses can override this method to change the class of objects that will be created.



Decorator
 is a structural pattern that allows adding new behaviors to objects dynamically by placing them inside special wrapper objects, called decorators.


 The main thread simply cannot be blocked for an indeterminate period of time-- therefore, we use callbacks to schedule the execution of code in time in a controlled manner.

----------------------------------------------------------------------------------------------------------------------




Sync and async

Sync - blocking 
const fs = require('fs');

const data = fs.readFileSync('/file.md'); // blocks here until file is read



in the synchronous version if an error is thrown it will need to be caught or the process will crash



Async

const fs = require('fs');

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});



JS IS SYNC : IN BROWSER : 
But JavaScript was born inside the browser, its main job, in the beginning, was to respond to user actions, like onClick, onMouseOver, onChange, onSubmit and so on. How could it do this with a synchronous programming model?
The answer was in its environment. The browser provides a way to do it by providing a set of APIs that can handle this kind of functionality.


Alternatives to callbacks - Promises (ES6) and Async/Await (ES2017).



Order - process.nextTick() > promises (micro task queue) > [setTimeout(0 ms) > setImmediate](micro task queue)

setImmediate() argument is a callback that's executed in the next iteration of the event loop.
process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.






console.log("Hello => number 1");

setTimeout(() => {
  console.log("The timeout running last => number 4");
}, 0);

setImmediate(() => {
  console.log("Running before the timeout => number 3");
});

process.nextTick(() => {
  console.log("Running at next tick => number 2");
});



----------------------------------------------------------------------------------------------------------------------
