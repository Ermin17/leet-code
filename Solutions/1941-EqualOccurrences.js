// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

var areOccurrencesEqual = function(s) {
  var object = {};
  for (var i = 0; i < s.length; i++) {
      if (object[s[i]] === undefined) {
          object[s[i]] = 1;
      } else {
          object[s[i]]++;
      }
  }

  var val = object[s[0]];

  for (key in object) {
      if (val !== object[key]) {
          return false;
      }
  }

  return true;
};