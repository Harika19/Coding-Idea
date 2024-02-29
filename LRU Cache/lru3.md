Designing an LRU (Least Recently Used) Cache in Java while adhering to SOLID principles involves creating a flexible, maintainable, and scalable solution. SOLID principles are guidelines that can enhance software development through better organization of code. Here's an implementation that takes these principles into account:

1. Single Responsibility Principle (SRP)
Each class has a single responsibility. Here, LRUCache manages the cache, while the DoublyLinkedList and Node handle the ordered storage mechanism.

2. Open/Closed Principle (OCP)
The code is open for extension but closed for modification. This implementation allows extending features without modifying existing code, such as adding new eviction policies.

3. Liskov Substitution Principle (LSP)
Subtypes must be substitutable for their base types. This principle is less directly applicable here but is important for extending classes like Node.

4. Interface Segregation Principle (ISP)
No client should be forced to depend on methods it does not use. Our simple LRU cache design uses minimal interfaces, focusing on core functionalities to avoid forcing unnecessary methods on the client.

5. Dependency Inversion Principle (DIP)
High-level modules should not depend on low-level modules. Both should depend on abstractions. This implementation keeps high-level cache operations separate from the low-level data structure operations, connected by the abstraction of operations rather than direct manipulation.

Below is the Java code for an LRU Cache:

java
Copy code
import java.util.HashMap;

class LRUCache {
    private final int capacity;
    private HashMap<Integer, Node> map;
    private DoublyLinkedList cache;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        this.cache = new DoublyLinkedList();
    }

    public int get(int key) {
        if (!map.containsKey(key)) return -1;
        Node node = map.get(key);
        cache.moveToHead(node);
        return node.value;
    }

    public void put(int key, int value) {
        Node node = map.get(key);
        if (node == null) {
            if (map.size() == capacity) {
                Node tail = cache.removeTail();
                map.remove(tail.key);
            }
            Node newNode = new Node(key, value);
            cache.addToHead(newNode);
            map.put(key, newNode);
        } else {
            node.value = value;
            cache.moveToHead(node);
        }
    }

    private static class Node {
        int key, value;
        Node prev, next;
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    private static class DoublyLinkedList {
        private Node head, tail;

        public DoublyLinkedList() {
            head = new Node(0, 0);
            tail = new Node(0, 0);
            head.next = tail;
            tail.prev = head;
        }

        public void addToHead(Node node) {
            node.next = head.next;
            node.prev = head;
            head.next.prev = node;
            head.next = node;
        }

        public void remove(Node node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }

        public void moveToHead(Node node) {
            remove(node);
            addToHead(node);
        }

        public Node removeTail() {
            Node res = tail.prev;
            remove(res);
            return res;
        }
    }

    public static void main(String[] args) {
        LRUCache cache = new LRUCache(2);
        cache.put(1, 1);
        cache.put(2, 2);
        System.out.println(cache.get(1)); // returns 1
        cache.put(3, 3); // evicts key 2
        System.out.println(cache.get(2)); // returns -1 (not found)
        cache.put(4, 4); // evicts key 1
        System.out.println(cache.get(1)); // returns -1 (not found)
        System.out.println(cache.get(3)); // returns 3
        System.out.println(cache.get(4)); // returns 4
    }
}
This LRU Cache implementation leverages a HashMap for O(1) access time and a doubly linked list to maintain insertion order, allowing for efficient eviction of the least recently used entry when the capacity is reached. The design separates concerns (SRP) by using different classes for the cache mechanism (LRUCache) and the underlying data structure (DoublyLinkedList and Node), and it is designed for extension (OCP) such as adding new features or changing eviction policies without modifying existing code.




