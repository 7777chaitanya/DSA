// Linked list is a list of Nodes
// In singly linked list, each node consists of current value & pointer to next node
// Multiple nodes can be instantiated using the Node class

class Node {
  constructor(val = null) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // For functions declared inside of class, you need not use the function keyword
  // TC => O(1) since you know the address of the tail
  push(val) {
    // create a new node with the given value
    const node = new Node(val);

    // check if the Linked List has a head
    // If the linkedlist has no head then set the head as the newly created node

    if (!this.head) {
      this.head = node;
    }
    // Otherwise, set the next node of tail as newly created node
    else {
      this.tail.next = node;
    }
    // Atlast point the tail to the newly created node
    this.tail = node;
    // Increment the length by 1
    this.length++;
    this.printList();
    return this;
  }

  // TC => O(n), need to iterate the list till tail to pop
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
      } else {
        //iterate till the node before tail
        let current = this.head;
        let newTail = null;
        while (current.next) {
          newTail = current;
          current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
      }
      this.length--;
      this.printList();
      return this;
    }
  }

  printList() {
    if (!this.head) {
      return "Linked list has no nodes";
    }
    let current = this.head;
    let opString = "";
    while (current.next) {
      opString += current.val + " -> ";
      current = current.next;
    }
    opString += this.tail.val;
    return opString;
  }

  reverseList() {
    if (!this.head) {
      return "Linked List is empty";
    } else {
      let current = this.head;
      let node = new Node(current.val);
      let tempTail = node;
      let tempHead = node;
      current = current.next;

      while (current && current.next) {
        node = new Node(current.val);
        node.next = tempHead;
        tempHead = node;
        current = current.next;
      }
      if (this.length > 1) {
        node = new Node(this.tail.val);
        node.next = tempHead;
        tempHead = node;
      }

      this.head = tempHead;
      this.tail = tempTail;
    }
    this.printList();
  }

  shift() {
    if (!this.head) {
      return "Linkedlist is empty";
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) {
      return "Invalid index";
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }
      return current.val;
    }
  }

  set(index, val) {
    if (index < 0 || index > this.length - 1) {
      return "Invalid index";
    } else {
      let current = this.head;
      let currentIndex = 0;
      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }
      current.val = val;
    }
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return "Invalid index";
    } else {
      let node = new Node(val);
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else if (index === this.length) {
        this.tail.next = node;
        this.tail = node;
      } else {
        let current = this.head;
        let currentIndex = 0;
        while (currentIndex < index - 1) {
          current = current.next;
          currentIndex++;
        }
        node.next = current.next;
        current.next = node;
      }
    }
    this.length++;
  }

  // not working properly
  delete(index) {
    if (index < 0 || index > this.length - 1) {
      return "invalid index";
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      let currentIndex = 0;

      while (currentIndex < index - 1) {
        current = current.next;
        currentIndex++;
      }
      current.next = current.next.next;
      if(index === this.length-1){
        this.tail = current
      }
      this.length--;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(1));
console.log(singlyLinkedList.push(2));
console.log(singlyLinkedList.push(3));
singlyLinkedList.pop();
singlyLinkedList.push(5);
singlyLinkedList.pop();
singlyLinkedList.pop();
singlyLinkedList.push(9);
singlyLinkedList.push(234);

singlyLinkedList.shift();
singlyLinkedList.unshift(12);
singlyLinkedList.unshift(16);
singlyLinkedList.get(4);
console.log(singlyLinkedList.get(3));
singlyLinkedList.set(2, 85);
singlyLinkedList.insert(0, 5);
singlyLinkedList.delete(4);

console.log(singlyLinkedList.printList());
