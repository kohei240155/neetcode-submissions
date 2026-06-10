class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const setNum = new Set(nums);
        let longest = 0;
        
        for (const num of setNum) {
            if (!setNum.has(num - 1)) {
                let length = 1;        
                while (setNum.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
