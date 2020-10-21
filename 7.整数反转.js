/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let xstring = x.toString();
  let xnumber = 0;
  if (~xstring.indexOf('-')) {
    xstring = xstring.substring(1, xstring.length);
    xnumber = - xstring.split('').reverse().join('');
    return xnumber < - Math.pow(2, 31) ? 0 : xnumber;
  }
  xnumber = + xstring.split('').reverse().join('');
  return xnumber > Math.pow(2, 31) - 1 ? 0 : xnumber;
};

// @lc code=end

