/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const n = parseInt(s, 10);

  if (Number.isNaN(n)) {
    return 0;
  } else if (n > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (n < - Math.pow(2, 31)) {
    return - Math.pow(2, 31);
  }
  return n;
};

// @lc code=end

