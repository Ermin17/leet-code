// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function(head) {
  var prev = null;
  var current = head;

  while (current) {
      var next = current.next;
      current.next = prev;
      prev = current;
      current = next;
  }

  return prev;
};