/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const s = x.toString();
  const len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i ++) {
    if (s[i] !== s[len - i - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

