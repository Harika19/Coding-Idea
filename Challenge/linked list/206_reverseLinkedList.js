// https://leetcode.com/problems/reverse-linked-list/

/*
1. take curr var and point to head
2. take prev dummy var with null
3. next = curr.next
4. change connection to prev -> curr.next = prev
5. move prev to curr and curr to next
*/

var reverseList = function(head) {
    let curr = head
    let prev = null
    while(curr!=null){
        let next = curr.next;
        curr.next = prev
        prev = curr
        curr= next
    }
    return prev
};

// console.log(reverseList([1,2,3,4,5]))


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseList = function(head) {
    let curr = head;
    let prev = null;
    while (curr != null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

// Create linked list from array
var list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Reverse the list
var reversedList = reverseList(list);

console.log(reversedList)

// Print the reversed list (convert to array for display purposes)
let resultArray = [];
while (reversedList != null) {
    resultArray.push(reversedList.val);
    reversedList = reversedList.next;
}
//console.log(resultArray); // Output: [5, 4, 3, 2, 1]
