// https://leetcode.com/problems/longest-common-prefix/description/

function longestCommonPrefix(strs: string[]): string {

  var prefix: string = '';

  // Sort strings to get the longest and shortest string

  strs.sort();

  const shortestStr = strs[strs.length - 1];
  const longestStr = strs[0];

  // Compare longest and shortest
  for ( let i = 0; i < shortestStr.length; i++) {
      if (i < longestStr.length && shortestStr[i] === longestStr[i]) {
          prefix = prefix + shortestStr[i];
      } else {
          break;
      }
  }

  return prefix;
};