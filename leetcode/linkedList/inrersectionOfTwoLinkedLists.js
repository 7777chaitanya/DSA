/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

function len(head) {
  if (!head) {
    return 0;
  }
  let length = 1;
  while (head.next) {
    head = head.next;
    length++;
  }
  return length;
}
var getIntersectionNode = function (headA, headB) {
  let m = len(headA);
  let n = len(headB);
  let d = Math.abs(m - n);
  let mHead = headA;
  let nHead = headB;
  let currentCount = 0;

  // move longer head by d places
  if (m > n) {
    while (currentCount < d) {
      mHead = mHead.next;
      currentCount++;
    }
  } else {
    while (currentCount < d) {
      nHead = nHead.next;
      currentCount++;
    }
  }

  while (mHead && nHead) {
    if (mHead === nHead) {
      return mHead;
    }
    mHead = mHead.next;
    nHead = nHead.next;
  }

  return null;
};

// TC => O(m || n) => whichever is greater
// SC => O(1)