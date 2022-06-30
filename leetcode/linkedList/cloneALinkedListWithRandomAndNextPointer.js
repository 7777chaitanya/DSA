/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// TC => O(n) -> iterate the list from head to current
// current might be the last element
function findTheDistanceOfRandomFromHead(head, current) {
  let distance = 0;
  let random = current.random;
  while (head !== random) {
    head = head.next;
    distance++;
  }
  return distance;
}

var copyRandomList = function (head) {
  if (!head) return head;
  let current = head;
  let prev = null;
  let resultHead = null;
  // TC => O(n) -> iterating the list once to copy data
  while (current) {
    let node = new Node(current.val);
    if (current.random === null) {
      node.random === null;
    }
    if (prev !== null) {
      prev.next = node;
    } else {
      resultHead = node;
    }
    prev = node;
    current = current.next;
  }

  //setting the values of random
  current = head;
  let resultCurrent = resultHead;
  //   TC => O(n^2)
  // outer while loop iterates the list once to check for all nodes which have random nodes
  // and the findTheDistanceOfRandomFromHead function takes O(n) TC
  while (current) {
    if (current.random === null) {
      resultCurrent && resultCurrent.random === null;
    } else {
      let dfh = findTheDistanceOfRandomFromHead(head, current);
      //connect the random of result's current to node in dfh distance
      let passes = 0;
      let iterator = resultHead;
      while (passes < dfh) {
        if (iterator) {
          iterator = iterator.next;
        }
        passes++;
      }
      if (resultCurrent) {
        resultCurrent.random = iterator;
      }
    }
    if (current) {
      current = current.next;
    }
    if (resultCurrent) {
      resultCurrent = resultCurrent.next;
    }
  }
  return resultHead;
};

// TC => O(n^2)
// SC => O(1)
