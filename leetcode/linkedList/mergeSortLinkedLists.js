/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let prev = new ListNode();
  if (!list1 && !list2) {
    return list1;
  }
  let head;
  let headFlag = true;

  while (list1 && list2) {
    let node = new ListNode();
    if (list1.val < list2.val) {
      node.val = list1.val;
      list1 = list1.next;
    } else {
      node.val = list2.val;
      list2 = list2.next;
    }
    prev.next = node;
    prev = node;
    if (headFlag) {
      head = node;
      headFlag = false;
    }
  }
  while (list1) {
    let node = new ListNode();
    node.val = list1.val;
    list1 = list1.next;
    prev.next = node;
    prev = node;
    if (headFlag) {
      head = node;
      headFlag = false;
    }
  }
  while (list2) {
    let node = new ListNode();
    node.val = list2.val;
    list2 = list2.next;
    prev.next = node;
    prev = node;
    if (headFlag) {
      head = node;
      headFlag = false;
    }
  }
  return head;
};
