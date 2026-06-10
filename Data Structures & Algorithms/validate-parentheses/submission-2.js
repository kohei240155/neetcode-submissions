class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const strArray = s.split('');
        console.log(strArray.length);
        if (strArray.length % 2 !== 0) return  false;
        const stack = [];

        for (const str of strArray) {
            if (str === '[' || str === '(' || str === '{') {
                stack.push(str);
            } else {
                const cur = stack.pop();
                if (str === ']') {
                    if (cur !== '[') return false;
                } else if (str === '}') {
                    if (cur !== '{') return false;
                } else if (str === ')') {
                    if (cur !== '(') return false;
                }
            }
        }

        return stack.length === 0;
    }
}
