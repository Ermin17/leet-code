// https://leetcode.com/problems/palindrome-number/description/

package SolutionsJava;

public class PalindromeChecker {
    public static void main(String[] args) {
        PalindromeChecker checker = new PalindromeChecker();
        boolean isPalindrome = checker.isPalindrome(909);
        boolean isNotPalindrome = checker.isPalindrome(82328221);
        System.out.println("Is palindrome:" + isPalindrome);
        System.out.println("Is not palindrome:" + isNotPalindrome);

    }

    public boolean isPalindrome(int x) {
        String num = Integer.toString(x);
        String[] numStr = num.split("");
        for (int i = 0; i < numStr.length; i++) {
            String trackF = numStr[i];
            String trackB = numStr[numStr.length - 1 - i];
            if (!trackF.equals(trackB)) {
                return false;
            }

        }

        return true;
    }

}