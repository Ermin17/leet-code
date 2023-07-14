// https://leetcode.com/problems/counter/

var createCounter = function(n) {
  var isCalled = true;
  return function() {
      if (!isCalled) {
          return n;
      } else {
          return n++;
      }
  };
};