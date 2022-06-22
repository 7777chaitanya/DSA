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
var reverseList = function (head) {
  if (!head) return head;
  let current = head;
  let node = new ListNode(head.val);
  let newTail = node;
  if (current.next !== null) {
    current = current.next;
    while (current.next) {
      node = new ListNode(current.val);
      node.next = newTail;
      newTail = node;
      current = current.next;
    }
    node = new ListNode(current.val);
    node.next = newTail;
    newTail = node;
    head = node;
  }
  return head;
};


// TC -> O(n)
// SC -> O(n)