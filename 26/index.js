/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  var len = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[len++] = nums[i];
    }
  }
  console.log(len);
  return len;
};
removeDuplicates([1, 1, 2,1,3]);
