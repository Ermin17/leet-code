// https://leetcode.com/problems/rings-and-rods/

var countPoints = function(rings) {
  var result = {};
  for (var i = 0; i < rings.length; i+=2) {
      var color = rings[i];
      var rod = rings[i+1];
      if (result[rod] === undefined) {
          result[rod] = [];
      }
      result[rod].push(color);
  }

  var count = 0;
  for (key in result) {
      if (result[key].includes('R') && result[key].includes('G') && result[key].includes('B')) {
          count++
      }
  }

  return count;

};