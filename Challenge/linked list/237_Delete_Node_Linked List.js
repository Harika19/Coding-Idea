// https://leetcode.com/problems/delete-node-in-a-linked-list/description/

var deleteNode = function(node) {
    // copy 1 to 5 node and then del 1 node
    node.val = node.next.val
    node.next = node.next.next
};

// head = [4,5,1,9], node = 5

console.log(deleteNode(5)) // [4,1,9]