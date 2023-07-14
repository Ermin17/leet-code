// https://leetcode.com/problems/sign-of-the-product-of-an-array/

var arraySign = function(nums) {
  var lessThan0 = 0;
  var greaterThan0 = 0;
  var is0 = 0;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        lessThan0++;
      }
      if (nums[i] > 0) {
        greaterThan0++;
      }
      if (nums[i] === 0) {
        is0 = 1;
        return 0;
      }
    }

    if (lessThan0 % 2 > 0) {
      return -1;
    } else {
      return 1;
    }

};