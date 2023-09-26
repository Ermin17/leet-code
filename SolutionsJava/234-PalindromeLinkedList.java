// https://leetcode.com/problems/palindrome-linked-list/description/

class Solution {
    public boolean isPalindrome(ListNode head) {
        ArrayList<Integer> stackVals = new ArrayList<>();
        ListNode copyHead = head;
        while (copyHead != null) {
            stackVals.add(copyHead.val);
            copyHead = copyHead.next;
        }

        int i = stackVals.size() - 1;
        copyHead = head;

        while (i >= 0) {
            int currentVal = stackVals.get(i);
            if (head.val != currentVal) {
                return false;
            }

            head = head.next;
            i--;
        }
        return true;
    }
}
