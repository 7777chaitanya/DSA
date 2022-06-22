/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let length = 0;
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }
  length++;
  let middle = Math.floor(length / 2);
  current = head;
  let currentIndex = 0;

  while (currentIndex < middle) {
    current = current.next;
    currentIndex++;
  }
  return current;
};


// TC => O(n) -> iterating the list atleast once to calculate length
// SC => O(1) -> Extra space is constant across different input sizes
