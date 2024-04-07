class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(prefix) {
      let node = this.root;
      for (let char of prefix) {
        if (!node.children[char]) {
          return null; // Prefix not found
        }
        node = node.children[char];
      }
      return node;
    }
  
    getSuggestions(prefix) {
      let suggestions = [];
      let node = this.search(prefix);
      if (node === null) return suggestions;
  
      const traverse = (currentNode, currentPrefix) => {
        if (currentNode.isEndOfWord) {
          suggestions.push(currentPrefix);
        }
        for (let [char, childNode] of Object.entries(currentNode.children)) {
          traverse(childNode, currentPrefix + char);
        }
      };
  
      traverse(node, prefix);
      return suggestions;
    }
  }
  
  const N = 5;
  const destinations = ["DELHI", "BANGALORE", "MUMBAI", "CHENNAI", "GURGAON", "DUBAI"];
  const keysPressed = ["D", "E", "R", "BACKSPACE", "L", "H", "I", "ENTER"];
  let input = "";
  let trie = new Trie();
  
  // Insert all destinations into the Trie
  for (let destination of destinations) {
    trie.insert(destination);
  }
  
  function processKeys(key) {
    if (key === 'BACKSPACE') {
      input = input.slice(0, -1); // remove last char
    } else if (key === 'ENTER') {
      if (destinations.includes(input)) {
        console.log("valid destination");
      } else {
        console.log("not a valid destination");
      }
      input = ""; // Reset input after processing ENTER key
    } else {
      input += key;
      let suggestions = trie.getSuggestions(input);
      console.log("Suggested letters: ", suggestions.map(suggestion => suggestion[0]));
    }
  }
  
  keysPressed.forEach(processKeys);