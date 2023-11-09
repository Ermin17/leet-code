// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {

  const romanNums: {} = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
  };

  var romanString: string = s.toUpperCase();

  // Iterate through string to compare roman numerials to object of roman numerials and number values
  // Also look for a substring of the 6 specific substration instances

  var romanIntValue: number = 0;
  var romanSubstractTotal: number = 0;

  for (var i = 0; i < romanString.length; i++) {
      if (i < romanString.length - 1) {
          var currentPlusNext: string = romanString[i] + romanString[i + 1]

          if (romanNums[currentPlusNext]) {
              romanSubstractTotal += (romanNums[romanString[i]] * 2);
          }

      }

      romanIntValue += romanNums[romanString[i]]

  }

  return (romanIntValue - romanSubstractTotal);

};