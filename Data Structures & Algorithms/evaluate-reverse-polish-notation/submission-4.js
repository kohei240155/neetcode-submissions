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
                const num1 = stack.pop();
                const num2 = stack.pop();
                if (token === '+') {
                    stack.push(num2 + num1);
                } else if (token === '-') {
                    stack.push(num2 - num1);
                } else if (token === '*') {
                    stack.push(num2 * num1);
                } else {
                    stack.push(Math.trunc(num2 / num1));
                }
            }
        }
        return stack.pop();
    }
}
