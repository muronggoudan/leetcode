/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const len = s.length;
  const regExp = /[a-zA-Z0-9]{1}/;
  let [i, j] = [0, len - 1];

  while (i < j) {
    while (!regExp.test(s[i]) && i < j) {
      i ++;
    }
    while (!regExp.test(s[j]) && i < j) {
      j --;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i ++;
    j --;
  }

  return true;
};
// @lc code=end

