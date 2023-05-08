// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {
  var sorted = {};

  for (var i = 0; i < strs.length; i++) {
      var string = strs[i];
      var anagramArr = strs[i].split('').sort();
      var anagram = anagramArr.join('');
      if (sorted[anagram] === undefined) {
          sorted[anagram] = [string];
      } else {
          sorted[anagram].push(string);
      }
  }
  console.log(sorted)
  var result = [];
  for (key in sorted) {
      result.push(sorted[key]);
  }

  return result;
};