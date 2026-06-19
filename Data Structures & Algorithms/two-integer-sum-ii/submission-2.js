class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const map = new Map();

        for (let i = 0; i < numbers.length; i++) {
            if (map.has(numbers[i])) {
                return [map.get(numbers[i]) + 1, i + 1];
            }
            map.set(target - numbers[i], i);
        }

    }
}
