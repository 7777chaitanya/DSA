/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;
  let length = 1;
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }
  let positionFromBeginning = length - n + 1;

  if (positionFromBeginning === 1) {
    head = head.next;
  } else {
    current = head;
    let currentIndex = 1;
    while (currentIndex < positionFromBeginning - 1) {
      current = current.next;
      currentIndex++;
    }
    current.next = current.next.next;
  }

  return head;
};

// TC => O(n) -> to iterate the whole linkedlist once to calculate length
// SC => O(1) -> extra space used is constant across different input sizes
