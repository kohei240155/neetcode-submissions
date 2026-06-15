class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pair = {
            '}': '{',
            ']': '[',
            ')': '(',
        }

        for (const char of s) {
            if (char === '{' || char === '[' || char === '(') {
                stack.push(char);
            } else {
                if (pair[char] !== stack.pop()) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}