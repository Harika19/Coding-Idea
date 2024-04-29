function ListNode(val){
    this.val = val;
    this.next = null;
}

function removeLastOccurenceLL(head, target){
    if(!head) return null;
    let dummy = new ListNode(null);
    dummy.next = head;
    let curr = dummy;
    let lastOccurence = null;

    while(curr && curr.next){
        if(curr.next.val === target){
            lastOccurence = curr;
        }
        curr = curr.next;
    }

    if(lastOccurence){
        lastOccurence.next = lastOccurence.next.next;
    }

    return dummy.next;
}

const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(2);
list.next.next.next.next = new ListNode(4);
list.next.next.next.next.next = new ListNode(4);
list.next.next.next.next.next.next = new ListNode(4);
list.next.next.next.next.next.next.next = new ListNode(3);

const target = 4;
const newList = removeLastOccurenceLL(list, target);
function print(head){
    let curr = head;
    while(curr){
        console.log(curr.val);
        curr = curr.next;
    }
}

print(newList);