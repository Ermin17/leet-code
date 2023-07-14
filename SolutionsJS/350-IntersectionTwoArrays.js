//  https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
  var nums1Index = 0;
  var nums2Index = 0;
  var result = [];
  nums1.sort((a,b) => a - b);
  nums2.sort((a,b) => a- b);

  while (nums1Index < nums1.length && nums2Index < nums2.length){
      if (nums1[nums1Index] === nums2[nums2Index]){
          result.push(nums1[nums1Index])
          nums1Index++;
          nums2Index++;
      } else if (nums1[nums1Index] < nums2[nums2Index]){
          nums1Index++;
      } else {
          nums2Index++;
      }

  }


  return result;
};