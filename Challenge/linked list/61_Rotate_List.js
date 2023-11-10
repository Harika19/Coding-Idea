// https://leetcode.com/problems/rotate-list/description/


var rotateRight = function(head, k) {
    if(head==null || (head.next==null) || k==0) return head
    let c=1
    let curr = head
    while(curr.next!=null){
        c+=1
        curr = curr.next
    }
    curr.next = head
    k = c - (k%c)
    while(k-- >0) curr=curr.next
    head = curr.next 
    curr.next = null
    return head
};