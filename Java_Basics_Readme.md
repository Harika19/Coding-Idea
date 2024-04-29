Java


	•		Compilation vs. Interpretation:
	•	Java: Java is a statically-typed language that is compiled into bytecode, which is executed by the Java Virtual Machine (JVM). The compilation step allows for extensive optimizations by the compiler, and the JVM can further optimize the bytecode at runtime. This results in highly efficient code execution.
	•	JavaScript: JavaScript is an interpreted language. While modern JavaScript engines use Just-In-Time (JIT) compilation to improve performance, there may still be a performance overhead compared to languages that are compiled to machine code.
	•			Type Systems:
	•	Java: Java is strongly typed, which means that variable types are checked at compile-time. This allows the compiler to optimize the code better and catch type-related errors early.
	•	JavaScript: JavaScript is dynamically typed, and type checking happens at runtime. This can introduce some runtime overhead for type checking and conversions.


An interpreted language is a type of programming language where the source code is not compiled into machine code before it is executed but is translated into machine code or executed directly by an interpreter at runtime
◦	No Compilation:
◦	Platform Independence:

Compile Time:Syntax Analysis, Semantic Analysis, Optimization, Code Generation, Executable Output:binary
Runtime: Execution,Dynamic Behavior,

Memory Allotment of String
Whenever a String Object is created as a literal, the object will be created in the String constant pool. This allows JVM to optimize the initialization of String literal.
Example: 
String demoString = "Geeks";
The string can also be declared using a new operator i.e. dynamically allocated. In case of String are dynamically allocated they are assigned a new memory location in the heap. This string will not be added to the String constant pool.
Example: 
String demoString = new String("Geeks");


Why did the String pool move from PermGen to the normal heap area? 
PermGen space is limited, the default size is just 64 MB. it was a problem with creating and storing too many string objects in PermGen space. That’s why the String pool was moved to a larger heap area. To make Java more memory efficient, the concept of string literal is used. By the use of the ‘new’ keyword, The JVM will create a new string object in the normal heap area even if the same string object is present in the string pool. 
For example:
String demoString = new String("Bhubaneswar");


	◦	Because java uses the concept of string literal. Suppose there are 5 reference variables, all refer to one object “Sachin”. If one reference variable changes the value of the object, it will be affected by all the reference variables. That is why string objects are immutable in Java.
	◦	To make Java more memory efficient (because no new objects are created if it exists already in the string constant pool). 
	◦	StringBuilder is a good practice when you need to build or modify strings efficiently, especially in scenarios where performance or memory usage is a concern.
	◦	When an array is declared, only a reference of an array is created.To create or give memory to the array, you create an array like this: The general form of new as it applies to one-dimensional arrays appears as follows: 
	◦	var-name = new type [size];
	◦	Obtaining an array is a two-step process. First, you must declare a variable of the desired array type. Second, you must allocate the memory to hold the array, using new, and assign it to the array variable. Thus, in Java, all arrays are dynamically allocated.
	◦	int intArray[];    //declaring array
	◦	intArray = new int[20];  // allocating memory to array
	◦	Final -> final int[] arr = { 1, 2, 3, 4, 5 };=> data can be changed which means we can change the state of the object but not reference. 
====================================================================================================================================
String:

Function :

.length();
.charAt(3);
.substring(3); // returns “ksforGeeks”
.substring(2, 5); // returns “eks” => like slice in js
s1.concat(s2);
s.indexOf(“Share”);
s.lastIndexOf("a")
“Geeks”.equals(“Geeks”); // returns true
“Geeks”.equalsIgnoreCase(“geeks”); // returns true
word1.toLowerCase(); // returns “hello"
word1.toUpperCase(); // returns “HELLO”
word1.trim(); // returns “Learn Share Learn” at start and end
s1.contains(s2)
str.startsWith("Geek")) // true
(str.endsWith("port"));

====================================================================================================================================


OOPS:

Abstraction:: Data Abstraction may also be defined as the process of identifying only the required characteristics of an object, ignoring the irrelevant details.

Encapsulation: in encapsulation, the variables or the data in a class is hidden from any other class and can be accessed only through any member function of the class in which they are declared.
•	Encapsulation can be achieved by declaring all the variables in a class as private and writing public methods in the class to set and get the values of the variables.

Inheritance : one class is allowed to inherit the features (fields and methods) of another class.
Polymorphism: differentiate between entities with the same name efficiently.


Construcor :public class Dog {
    // Instance Variables
    String name;
    String breed;
    int age;
    String color;
 
    // Constructor Declaration of Class
    public Dog(String name, String breed, int age,
               String color)
    {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
◦	Default Access Modifier => having default access modifiers are accessible only within the same package.



COLLECTIONS:
====================================================================================================================================

ArrayList - dynamic array where the size is not fixed as an array.
ArrayList<Integer> numbers = new ArrayList<>();
•	Creates a bigger-sized memory on heap memory (for example memory of double size).
•	Copies the current memory elements to the new memory.
•	The new item is added now as there is bigger memory available now.
•	Delete the old memory.
•	 numbers.add(1);
•	numbers.set(indexToUpdate, newValue);
•	numbers.remove(indexToDelete);
•	Numbers.size() not length
•	list.add(index, value);
•
====================================================================================================================================

HashMap: It stores the data in (Key, Value) pairs.
◦	Map<String, Integer> map = new HashMap<>()
LinkedHashMap:  like HashMap with the additional feature of maintaining an order of elements inserted into it. HashMap provided the advantage of quick insertion, search, and deletion 
	◦	 Map<String, Integer> map = new LinkedHashMap<>();
TreeMap: The map is sorted according to the natural ordering of its keys
 map.put("vishal", 10); 
        map.put("sachin", 30); 
        map.put("vaibhav", 20); 
  Output :
sachin 30
vaibhav 20
vishal 10

Functions in map:
 map.put(1, "One");
 map.remove(3);
map.clear(); - clear and remove all of the elements
map.containsKey(20) // key - true/false
map.containsValue("Geeks") // value  - true/false
map.entrySet() - gives set view - [20=Geeks, 25=Welcomes, 10=Geeks, 30=You, 15=4], map - {20=Geeks, 25=Welcomes, 10=Geeks, 30=You, 15=4}
map1.equals(map2)
map.get("You")
map.isEmpty()// true
map.keySet() //map = {1=One, 3=Three, 5=Five, 7=Seven, 9=Nine}, keyset - [1, 3, 5, 7, 9]

map.putAll(mp);- used to copy all of the mappings from the specified map to this map.

====================================================================================================================================

SET:

Set<Obj> set = new HashSet<Obj> (); 
  Set<String> hash_Set = new HashSet<String>();
 hash_Set.add("Geeks");
 hs.remove("B");
UNION -:
Set<Integer> union = new HashSet<Integer>(a); 
        union.addAll(b);

intersection:
 Set<Integer> intersection = new HashSet<Integer>(a); 
        intersection.retainAll(b);
DIFF:
Set<Integer> difference = new HashSet<Integer>(a); 
        difference.removeAll(b);

st.clear();
set.size()

// Creating an iterator 
        Iterator value = set.iterator();
while (value.hasNext()) { 
            System.out.println(value.next()); 
        }

The toArray() method of Java Set is used to form an array of the same elements as that of the Set. Basically, it copies all the element from a Set to a new array.
Syntax: Object[] arr = abs_col.toArray();

====================================================================================================================================

STACK:

Stack<Integer> stack = new Stack<Integer>();
 stack1.push("4");

element at the top of the => stack.peek();

stack.pop()
stack.isEmpty()

 
====================================================================================================================================

QUEUE:

PriorityQueue:
•	Use a PriorityQueue when you need a queue with elements that have a specific order or priority.
•	Elements in a PriorityQueue are ordered according to their natural order or a specified comparator. Elements with higher priority (lower values) come out of the queue first.
•	Typical use cases include tasks scheduling, event handling, and situations where you need to process items in a specific order.

Queue<Integer> priorityQueue = new PriorityQueue<>();
priorityQueue.offer(3);
priorityQueue.offer(1);
priorityQueue.offer(2);
int firstElement = priorityQueue.poll(); // Retrieves the element with the highest priority (1)



PriorityQueue - The elements are stored based on the priority order which is ascending by default. 
Queue<Obj> queue = new PriorityQueue<Obj> (); 
 pq.add("Geeks") 
 pq.remove("Geeks");
// Printing the top element of
        // the PriorityQueue
        System.out.println(pQueue.peek());

// Printing the top element and removing it
        // from the PriorityQueue container
        System.out.println(pQueue.poll());

==============================================

LinkedList:
•	Use a LinkedList when you need a simple, general-purpose queue that maintains the order of elements based on the order they were added.
•	Elements in a LinkedList follow a first-in-first-out (FIFO) order, making it suitable for basic queue operations.
•	LinkedList can be used for implementing a standard queue for tasks or data that need to be processed in the order they are received.

Queue<Integer> linkedListQueue = new LinkedList<>();
linkedListQueue.offer(3);
linkedListQueue.offer(1);
linkedListQueue.offer(2);
int firstElement = linkedListQueue.poll(); // Retrieves the element in the order they were added (3)



Queue<String> queue = new LinkedList<>();
queue.add("apple");
// remove the element at the front of the queue
        String front = queue.remove();
// peek at the element at the front of the queue
        String peeked = queue.peek();

q.size();

Problems :

====================================================================================================================================

Arrays of arrays - 3 sum :
Arrays.sort(nums);
List<List<Integer>> res = new ArrayList<>();=> List will hold lists of integers
res.add(Arrays.asList(nums[i], nums[j], nums[k]));
====================================================================================================================================

Merging ele:
Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

List<int[]> res = new ArrayList<>(); =>List will hold air of integers
Access elements - res.get(res.size()-1)[1]

return res.toArray(new int[res.size()][]);

====================================================================================================================================

Insert Interval - just add elements to are and sort and same as merge interval

int[][] mergedIntervals = new int[intervals.length + 1][2];
for (int i = 0; i < intervals.length; i++) {
mergedIntervals[i] = intervals[i];
}
mergedIntervals[intervals.length] = newInterval;

====================================================================================================================================


424. Longest Repeating Character Replacement


class Solution {
public int characterReplacement(String s, int k) {
int l = 0;
Map < Character, Integer > map = new HashMap <> ();
int maxi = 0;
int maxiFrequent = 0;

        for (int r = 0; r < s.length(); r++) {
        char ele = s.charAt(r);

            map.put(ele, map.getOrDefault(ele, 0) + 1);

            maxiFrequent = Math.max(maxiFrequent, map.get(ele));
            while ((r - l + 1) - maxiFrequent > k) {
            char leftChar = s.charAt(l);
                map.put(leftChar, map.get(leftChar) - 1);
                l += 1;
            }
            maxi = Math.max(maxi, r - l + 1);
        }
        return maxi;
    }

}
====================================================================================================================================

49. Group Anagrams


char[] sorted = ele.toCharArray();
Arrays.sort(sorted);
String str = new String(sorted);
if(!map.containsKey(str)){
map.put(str, new ArrayList<>());
}
map.get(str).add(ele);

====================================================================================================================================

Create 2D array in java:
Accessing str = if (text1.charAt(ind1) == text2.charAt(ind2)) { // charAt **** get char in string not []


int[][] dp = new int[text1.length()][text2.length()];
for(int rows[]: dp){
Arrays.fill(rows, -1);

Js - let dp = new Array(nums.length).fill().map(() => new Array(nums.length).fill(-1));

Accessing str =  if (text1[ind1] == text2[ind2]) {

====================================================================================================================================

377. Combination Sum IV
JS

let map = new Map()
map[0] =1
for(let total=1;total<=target; total++){
map[total] =0
for(let ele of nums){
map[total] += (map[total-ele]||0);
}
}
return map[target]

JAVA

class Solution {
private int combo(int[] nums, int target, Map<Integer, Integer> map){
map.put(0,1);
for(int total=1;total<=target; total++){
map.put(total, 0);
for(int ele: nums){
if (map.containsKey(total - ele)) {
map.put(total, map.get(total) + map.get(total - ele));
}
}
}
return map.get(target);
}
public int combinationSum4(int[] nums, int target) {
Map<Integer,Integer> map = new HashMap<>();
return combo(nums, target, map);
}
}


====================================================================================================================================
Oops:


Note: Java doesn’t support Multiple Inheritance

ABSRACT : 								
When you don’t want to create an obj for abstract class …

Can have both abstract methods and non abstract methods
Multiple inheritance not possible


Var declared can be anything …
Int t ; => not compulsorily initialised
Polymorphism works here :

Abstract Animal class parent
Dog extends Animal
Cat extends Animal..

Animal obj = new Dog();
Animal obj = new Cat();

Can have a constructor but for abstract class you won’t create an obj…

INTERFACE:
Opt this when you want to share common actions/responsibilities. Methods

Only declaration of methods , but from java 8 - you can give body as well but method should be default
All methods should be implemented
Multiple inheritance possible


Var declared are by default public , static, final and should be initialised
Int t = 10;

No constructor

Polymorphism works here as well. - same code diff behaviour - dog, cat


====================================================================================================================================

StringBuilder

mutable sequence of characters.

StringBuilder str            = new StringBuilder();
 sb.append("Hello");
        sb.append(" ");
        sb.append("world!");
        System.out.println(sb.toString()); // Output: "Hello world!"
         

 sb.insert(6, "beautiful ");
        System.out.println(sb.toString()); // Output: "Hello beautiful world!"
         
        sb.reverse();
        System.out.println(sb.toString()); // Output: "!dlrow lufituaeb olleH"


