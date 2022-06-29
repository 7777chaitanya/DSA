/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function length(head) {
  if (!head) return 0;
  let current = head;
  let length = 1;
  while (current.next) {
    current = current.next;
    length++;
  }
  return length;
}

var isPalindrome = function (head) {
  if (!head) return false;
  if (!head.next) return true;
  let len = length(head);
  let front = head;
  let back = head;

  //move back to half places
  let half = Math.ceil(len / 2);
  let count = 1;
  while (count < half) {
    back = back.next;
    count++;
  }

  //reverse the linked list from the middle
  let reverseIterator = back.next;
  let prev = null;
  while (reverseIterator) {
    let node = new ListNode(reverseIterator.val);
    reverseIterator = reverseIterator.next;
    node.next = prev;
    prev = node;
  }
  back.next = prev;
  back = back.next;

  //checking if it's palindrome
  let passes = Math.floor(len / 2);
  count = 0;
  while (count < passes) {
    if (front.val === back.val) {
      front = front.next;
      back = back.next;
      count++;
    } else {
      return false;
    }
  }
  return true;
};

// TC => O(n) => we are iterating the LL atleast once to calculate the length
// SC => O(n) => While reversing the LL, we are storing half of the reversed LL nodes,
//               before reconnecting them(i.e before getting rid of half of the original
//               linked list)
