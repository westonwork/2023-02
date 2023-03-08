/**
 * @param {number[]} nums
 * @return {boolean}
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/
 */

// 1st problem
// easy on leetcode
const test1 = [1, 2, 3, 1]
const expectedOutput1 = true

const test2 = [1, 2, 3, 4]
const expectedOutput2 = false

const test3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
const expectedOutput3 = true

const test4 = [1, 2, 3, 1]
const expectedOutput4 = true

const test5 = [1, 2, 3, 1]
const expectedOutput5 = true

// original solution
// const containsDuplicate = (nums) => {
//     for(let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             if (i == j) continue
//             if(nums[i] == nums[j]) return true
//         }
//     }
//     return false
// };

// updated solution
var containsDuplicate = function(nums) {
    for(let i = 0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate(test1))
console.log(containsDuplicate(test2))
console.log(containsDuplicate(test3))
console.log(containsDuplicate(test4))
console.log(containsDuplicate(test5))



