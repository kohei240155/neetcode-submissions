class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];

        for (let i = 0; i < nums.length; i++) {
            let temp = 0;
            let isFirst = true;
            for (let j = 0; j < nums.length; j++) {
                
                if (i !== j) {
                    if (isFirst) {
                        temp += nums[j];
                        isFirst = false;
                    } else {
                        temp *= nums[j];
                    }
                }
            }
            result.push(temp);
        }
        return result;
    }
}
