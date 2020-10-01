'use strict';

// Feel free to make a PR with code comments on how you think this code could be better! Improvement suggestions always welcome.

// Solution: if there is only 1 number that appears odd times, then we can
//           simplify the problem by alternatively adding or substracting
//           the numbers in the array on a running sum. Eventually, only the
//           sole number that appears odd times in the array will be left in
//           this running sum.
//
//           Consider this array example:
//               [1,2,1]
//           1) at index = 0, sum = 0 + 1 * 1 = 1;   // 1 appears once so
//              far, so factor = 1;
//           2) at index = 1, sum = 1 + 1 * 2 = 3;   // 2 appears once so far,
//             so factor = 1;
//           3) for index = 2, we see number 1 again, but factor = -1,
//              so sum = 3 + (-1 * 1) = 2,
//           4) We've iterate the entire array and we're done, the number that
//              appears odd times is 2 in this problem.
function findOdd(A) {
  const signs = {};
  let sum = 0;

  for (let num of A) {
    // initialize the signs
    if (!signs[num]) {
      signs[num] = 1;
    }

    // add the number with the appropriate sign; if this is the even time we
    // see this number in the array, `signs[num] == -1`, and we will substract
    // the number; otherwise, `signs[num] == 1`, we will add the number to the
    // sum.
    sum += signs[num] * num;

    // flip the sign, next time we encounter the same number, we will use the
    // flipped sign as the factor, and cancel out that number in the `sum`.
    signs[num] *= -1;
  }

  // whatever left in the sum, is the number that appears odd time
  return sum;
}
