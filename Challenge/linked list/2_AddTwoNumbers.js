// https://leetcode.com/problems/add-two-numbers/description/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let temp = new ListNode()
    let curr = temp
    let carry =0

    while(l1!= null || l2 != null || carry){
        let sum =0
        if(l1!=null){
            sum+= l1.val
            l1=l1.next
        }
        if(l2!=null){
            sum+= l2.val
            l2=l2.next
        }
        sum += carry
        carry = Math.floor(sum/10)
        let newnode = new ListNode(sum % 10)
        curr.next = newnode
        curr = curr.next

    }
    return temp.next
};

console.log(addTwoNumbers([2,4,3], [5,6,4])) //[7,0,8]