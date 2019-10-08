/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const _list = new ListNode();
_list.val = 1;
_list.next = new ListNode();
_list.next.val = 2;
_list.next.next = new ListNode();
_list.next.next.val = 4;
_list.next.next.next = new ListNode();

const _list1 = new ListNode();
_list1.val = 1;
_list1.next = new ListNode();
_list1.next.val = 3;
_list1.next.next = new ListNode();
_list1.next.next.val = 4;
_list1.next.next.next = new ListNode();

let listnode = mergeTwoLists(_list, _list1);
console.log(listnode);
