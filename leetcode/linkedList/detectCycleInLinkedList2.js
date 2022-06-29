/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// TC => O(n);
function distanceFromHead(present, head) {
  let dfh = 0;
  while (head !== present) {
    head = head.next;
    dfh++;
  }
  return { dfh, present };
}
var detectCycle = function (head) {
  if (!head) return null;
  let current = head;
  let count = 0;
  while (current) {
    let { dfh, present } = distanceFromHead(current, head);
    if (dfh === count) {
      current = current.next;
      count++;
    } else {
      return present;
    }
  }
  return null;
};

// TC => O(n^2) 
// because in the while loop, we are iterating the linked list once
// And in every while loop, we are calling distance from head function with TC O(n)

// SC => O(1)
