class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const token of tokens) {
            if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
                stack.push(parseInt(token));
            } else {
                const numA = stack.pop();
                const numB = stack.pop();

                if (token === '+') {
                    stack.push(numA + numB);
                } else if (token === '-') {
                    stack.push(numB - numA);
                } else if (token === '*') {
                    stack.push(numA * numB);
                } else if (token === '/') {
                    stack.push(Math.trunc(numB / numA));
                }
            }
        }

        return stack.pop();
    }
}
