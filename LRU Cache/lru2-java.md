Below is a Java implementation of an LRU (Least Recently Used) cache that adheres to the SOLID principles. The SOLID principles are a set of design principles in object-oriented software development that help developers create more maintainable, understandable, and flexible software.

java
Copy code
import java.util.HashMap;

// Interface for Cache operations following the Single Responsibility Principle (SRP)
// and Interface Segregation Principle (ISP)
interface Cache<K, V> {
    void put(K key, V value);
    V get(K key);
}

// Represents a Node in the Doubly Linked List
class ListNode<K, V> {
    K key;
    V value;
    ListNode<K, V> prev;
    ListNode<K, V> next;

    public ListNode(K key, V value) {
        this.key = key;
        this.value = value;
    }
}

// LRU Cache implementation using a Doubly Linked List and a HashMap
// This class adheres to the SRP by focusing solely on cache management
public class LRUCache<K, V> implements Cache<K, V> {
    private final int capacity;
    private final HashMap<K, ListNode<K, V>> map;
    private ListNode<K, V> head, tail;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        this.map = new HashMap<>();
        this.head = new ListNode<>(null, null); // Dummy head
        this.tail = new ListNode<>(null, null); // Dummy tail
        head.next = tail;
        tail.prev = head;
    }

    // Adheres to the Open/Closed Principle (OCP) by allowing extension of getting and putting methods
    // without modifying the existing code structure.
    @Override
    public void put(K key, V value) {
        if (map.containsKey(key)) {
            ListNode<K, V> node = map.get(key);
            removeNode(node);
            node.value = value; // Update the value
            addNode(node);
        } else {
            if (map.size() == capacity) {
                map.remove(tail.prev.key); // Remove LRU from map
                removeNode(tail.prev); // Remove LRU from list
            }
            ListNode<K, V> newNode = new ListNode<>(key, value);
            map.put(key, newNode);
            addNode(newNode);
        }
    }

    @Override
    public V get(K key) {
        if (map.containsKey(key)) {
            ListNode<K, V> node = map.get(key);
            removeNode(node);
            addNode(node); // Move to head as most recently used
            return node.value;
        }
        return null; // Follows Liskov Substitution Principle (LSP) by returning null for a missing key, adhering to the Cache interface's contract
    }

    // Utility method to add a node right after head
    private void addNode(ListNode<K, V> node) {
        ListNode<K, V> headNext = head.next;
        node.next = headNext;
        node.prev = head;
        head.next = node;
        headNext.prev = node;
    }

    // Utility method to remove a node from the list
    private void removeNode(ListNode<K, V> node) {
        ListNode<K, V> nextNode = node.next;
        ListNode<K, V> prevNode = node.prev;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }
}

// Usage example
public class Main {
    public static void main(String[] args) {
        Cache<Integer, String> cache = new LRUCache<>(2);
        cache.put(1, "A");
        cache.put(2, "B");
        System.out.println(cache.get(1)); // Outputs "A"
        cache.put(3, "C"); // Evicts key 2
        System.out.println(cache.get(2)); // Outputs null
    }
}
How SOLID Principles are Applied:
Single Responsibility Principle (SRP): The LRUCache class has the sole responsibility of managing the cache. The ListNode class handles node-related data and operations. The Cache interface defines the operations of a cache, ensuring that each class focuses on a single responsibility.
Open/Closed Principle (OCP): The cache's functionality can be extended (for example, by adding new methods to the Cache interface or creating a new type of cache) without modifying existing code, thus adhering to the OCP.
Liskov Substitution Principle (LSP): The LRUCache class can be used anywhere a Cache is expected, without altering the correctness of the program. It properly handles operations as per the Cache interface contract.
Interface Segregation Principle (ISP): The Cache interface is specific and minimal, ensuring that the LRUCache class does not depend on methods it does not use. This keeps