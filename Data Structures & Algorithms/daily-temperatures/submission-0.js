class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = [];
        for (let i = 0; i < temperatures.length; i++) {
            let find = false;
            let day = 0;
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[i] < temperatures[j]) {
                    find = true;
                    day = j - i;
                    break;
                }
            }
            if (find) {
                result.push(day);
            } else {
                result.push(0);
            }
        }

        return result;
    }
}
