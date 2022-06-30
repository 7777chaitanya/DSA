/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function length(head) {
  if (!head) {
    return 0;
  }
  let length = 1;
  while (head.next) {
    length++;
    head = head.next;
  }
  let tail = head;
  return { length, tail };
}

var rotateRight = function (head, k) {
  if (k === 0 || !head) {
    return head;
  }
  let { length: len, tail } = length(head);
  if (k >= len) {
    k = k % len;
  }
  if (k === 0) {
    return head;
  }
  let count = 1;
  let passes = len - k;
  let current = head;
  while (count < passes) {
    current = current.next;
    count++;
  }
  tail.next = head;
  head = current.next;
  current.next = null;
  return head;
};

// TC => O(n) -> length of linked list -> iterating the LL atleast once to calculate length
// SC => O(1) -> constant space across different input sizes
