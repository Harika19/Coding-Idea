// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/*
Time Complexity: O(N)

Space Complexity: O(1)
*/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var removeNthFromEnd = function(head, n) {
    let temp = new ListNode();
    temp.next = head
    let fast = temp, slow = temp
    for(let i=0;i<=n;i++){
        fast = fast.next
    }
    while(fast!= null){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return temp.next
};

//console.log(removeNthFromEnd([1,2,3,4,5], 2))
var list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Remove the 2nd node from the end
var result = removeNthFromEnd(list, 2);

// Print the result (convert to array for display purposes)
let resultArray = [];
while (result != null) {
    resultArray.push(result.val);
    result = result.next;
}
console.log(resultArray); // Output: [1, 2, 3, 5]
