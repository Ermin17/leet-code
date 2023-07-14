// https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function(height) {
  var left = 0;
  var right = height.length - 1;
  var max_area = 0;
  while (left < right) {
      let area = Math.min(height[left], height[right]) * (right - left);
      max_area = Math.max(max_area, area);

      if (height[left] > height[right]) {
          right--
      } else {
          left++
      }
  }

  return max_area;
};