// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
   let temp = new ListNode()
   let prev = temp
   while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1
            prev = l1
            l1= l1.next
        }else{
            prev.next = l2
            prev = l2
            l2= l2.next
        }
   }

   if(!l1) prev.next = l2
   if(!l2) prev.next = l1
   return temp.next

};

var mergeTwoLists2 = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    let temp = {val: -1, next: null}
    console.log('temp', temp)
    let prev = temp

    while(l1 && l2){
        if(l1.val <= l2.val){
            prev.next = l1
            prev = l1
            l1 = l1.next
        }else{
            prev.next = l2
            prev = l2
            l2 = l2.next
        }
    }
    if(!l1) prev.next = l2
    if(!l2) prev.next = l1
    return temp.next
};

console.log(mergeTwoLists2([1,2,4],[1,3,4]))