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