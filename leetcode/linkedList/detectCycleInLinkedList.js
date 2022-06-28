/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let current = head;
    while(current){
        if(current.val === "a"){
            return true;
        }
        current.val = "a"
        current = current.next;
    }
    return false;
};

// TC => O(n) => Because we are iterating the linked list atleast once 
// SC => O(1) => We are using constant extra space irrespective of the input size