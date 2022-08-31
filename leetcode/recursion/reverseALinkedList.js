class ListNode {
  constructor() {
    this.data;
    this.next;
  }
}

let data = [1, 2, 3, 4, 5];
let headFlag = true;
let head = null;
let temp = null;
for (let i = 0; i < data.length; i++) {
  let node = new ListNode();
  node.data = data[i];
  node.next = null;
  if (headFlag) {
    head = node;
    headFlag = false;
    temp = head;
    continue;
  }
  temp.next = node;
  temp = node;
}

function printLinkedList() {
  let printTemp = head;
  while (printTemp) {
    console.log(printTemp);
    printTemp = printTemp.next;
  }
}

// function linkedListReversal(temp, temp1, head) {
//   if (!temp1.next) {
//     return head;
//   } else {
//     // this logic is incorrect
//     temp.next = temp1.next;
//     temp1.next = head;
//     head = temp1;
//     temp1 = temp1.next;
//     linkedListReversal(temp, temp1, head);
//   }
// }
// linkedListReversal(head, head.next, head);

// reverse linked list
while(temp){
    
}
printLinkedList();


console.log(head)
