// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

var getIntersectionNode = function(headA, headB) {
    console.log(headA, headB)
    let temp1= headA
    let temp2= headB
    while(temp1 != temp2){
        temp1 = (temp1 != null)  ? temp1.next : headB
        temp2 = (temp2 != null)  ? temp2.next : headA
    }
    return temp1

};

