// https://leetcode.com/problems/palindrome-linked-list/description/


var reverse = function(node){
    let curr = node
    let prev = null
    while(curr!=null){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

var isPalindrome = function(head) {
   // check if no ele or 1 ele
   if(head == null || head.next == null) return true

   let slow = head , fast = head
   // find middle ele
   while(fast.next && fast.next.next){
       slow = slow.next
       fast = fast.next.next
   }
   //reverse 2nd half
   slow.next = reverse(slow.next)

   // move slow to 1 step forward
   slow = slow.next 
   

   // start a pointer from start and slow from mid
   while(slow!=null){
       if(head.val != slow.val)  return false
       head = head.next
       slow = slow.next
   }
   return true;

};