// https://leetcode.com/problems/product-of-array-except-self/description/

var productExceptSelf = function(nums) {
  var answers = [];
  for (var i = 0; i < nums.length; i++) {
      var currentAnswer = 1;
      for (var j = 0; j < nums.length; j++) {
          if (i === j) {
              continue;
          } else {
              currentAnswer = nums[j] * currentAnswer;
          }
      }
      answers.push(currentAnswer);
  }

  return answers;
};