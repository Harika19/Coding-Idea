LRU Cache Implementation in Java
The LRU (Least Recently Used) cache can be implemented in Java using a combination of a HashMap and a LinkedList (or more specifically, LinkedHashMap for a more compact implementation). This satisfies several SOLID principles:

Single Responsibility Principle: Each class has a clear responsibility; LRUCache manages the cache, while the use of LinkedHashMap handles ordering.
Open/Closed Principle: The cache is open for extension (e.g., changing eviction policies) but closed for modification.
Liskov Substitution Principle: This principle is indirectly applied as we are using standard Java collections (Map interface) that can be substituted with other implementations.
Interface Segregation Principle: Java's Map interface itself is a good example, where simple interfaces are preferred.
Dependency Inversion Principle: Our implementation depends on abstractions (Java collections) rather than concrete classes.
java
Copy code
import java.util.LinkedHashMap;
import java.util.Map;

public class LRUCache<K, V> {
    private final int capacity;
    private final Map<K, V> cache;

    public LRUCache(int capacity) {
        this.capacity = capacity;
        // Access order (true) is set for maintaining LRU
        this.cache = new LinkedHashMap<>(capacity, 0.75f, true) {
            @Override
            protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
                // Remove the eldest element whenever size exceeds capacity
                return size() > LRUCache.this.capacity;
            }
        };
    }

    public synchronized V get(K key) {
        return cache.getOrDefault(key, null);
    }

    public synchronized void put(K key, V value) {
        cache.put(key, value);
    }
}
LRU Cache Implementation in JavaScript
Implementing an LRU cache in JavaScript can be achieved with a Map object since it maintains the insertion order of keys.

Single Responsibility Principle: The LRUCache class is solely responsible for managing the cache.
Open/Closed Principle: The implementation is open for extension (e.g., different eviction strategies can be implemented).
Liskov Substitution Principle & Interface Segregation Principle: Not directly applicable in this example due to JavaScript's dynamic nature and lack of strict interfaces.
Dependency Inversion Principle: We rely on JavaScript's Map abstraction for storing cache entries, following the principle of depending on abstractions.
javascript
Copy code
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return null;
        // Move to end to maintain LRU
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key); // Remove and re-add to update order
        } else if (this.cache.size >= this.capacity) {
            // Evict least recently used (LRU)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}
In both implementations, the key design challenge is maintaining the order of elements to ensure the least recently used element can be identified and evicted when the cache exceeds its capacity. The choice of data structures (LinkedHashMap in Java and Map in JavaScript) is critical to meeting this requirement efficiently, showcasing the application of the SOLID principles in designing flexible, maintainable code.