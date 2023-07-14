// https://leetcode.com/problems/two-sum/description/

var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
      var currentNum = nums[i];

      for (var j = i + 1; j < nums.length; j++) {
          if (currentNum + nums[j] === target) {
              return [i, j];
          }
      }
  }
};