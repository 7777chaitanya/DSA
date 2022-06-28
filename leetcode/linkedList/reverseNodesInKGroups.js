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
  let current = head;
  while (current.next) {
    length++;
    current = current.next;
  }
  return length;
}
var reverseKGroup = function (head, k) {
  let len = length(head);
  let batches = Math.floor(len / k);
  let current = head;
  let currentBatch = 1;
  let currentBatchStart = null;
  let currentBatchEnd = null;
  let lastBatch = null;
  let headOfOutput = null;
  while (currentBatch <= batches) {
    let count = 0;
    let prev = null;
    let pbe = currentBatchEnd;
    while (count < k) {
      let node = new ListNode(current.val);
      node.next = prev;
      prev = node;
      if (count === 0) {
        currentBatchEnd = node;
      }
      count++;
      if (count === k) {
        currentBatchStart = node;
      }
      current = current.next;
    }
    if (currentBatch > 1) {
      pbe.next = currentBatchStart;
    }
    if (currentBatch === 1) {
      headOfOutput = currentBatchStart;
    }
    if (currentBatch === batches) {
      lastBatch = currentBatchEnd;
    }
    currentBatch++;
  }
  lastBatch.next = current;
  return headOfOutput;
};

// TC => O(batches * k) => O(n) => Linear TC
// SC => O(1) => constant space for different inputs
