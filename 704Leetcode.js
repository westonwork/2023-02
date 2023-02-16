/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * https://leetcode.com/problems/binary-search/
 * solution: https://youtu.be/s4DPM8ct1pI
 */

// if you need to refer back to binary search that is completely fine.
const nums1 = [-1,0,3,5,9,12]
const target1 = 9
const expected1 = 4
// Explanation: 9 exists in nums and its index is 4/////////////////

const nums2 = [-1,0,3,5,9,12]
const target2 = 2
const expected2 = -1
// Explanation: 2 does not exist in nums so return -1

var search = function(nums, target) {
    let left = nums[0];
    let right = nums[nums.length-1]
    // cut the array in half by it's indexes and floor it in the case the amount of indexes is even
    let midpoint = Math.floor(nums.length / 2);
    console.log(midpoint)
    // if the target value is = 
    if (nums[midpoint] == target) {
        console.log("Found It v1");
        return nums[target];
    }
    // if the target value is < (less than)
    else if (nums[midpoint] < target) {
        console.log("Found It v2");
        return search(left);
    }
    // if the target value is > (greater than)
    else {
        console.log("Found It v3");
        return search(right);
    }
};

console.log(search(nums1, target1))
console.log(search(nums2, target2))