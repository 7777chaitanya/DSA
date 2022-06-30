/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (!head) {
    return head;
  }
  let current = head;
  while (true) {
    let flag = true;
    while (current && current.child === null) {
      current = current.next;
    }
    if (current && current.child) {
      flag = false;
      let temp = current.next;
      current.next = current.child;
      current.next.prev = current;
      current.child = null;
      while (current.next) {
        current = current.next;
      }
      current.next = temp;
      if (temp) {
        temp.prev = current;
      }
    }
    current = head;

    if (flag) {
      return head;
    }
  }
};

// SC => O(1) => using constant space across different input sizes
// TC =>
// let c = number of child nodes
// let n = length of the list inclusive of all child nodes
// best case -> O((c+1) * n) -> we will iterate the entire list atleast once if none of them has child, c = 0
