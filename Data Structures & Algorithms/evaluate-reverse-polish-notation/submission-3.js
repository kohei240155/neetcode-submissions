class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        if (tokens.length === 1 && tokens[0] > 0) return tokens[0];
        let result = 0;

        for (const token of tokens) {
            if (token !== '+' && token !== '-' && token !== '*' && token !== '/') {
                stack.push(token);
            } else {
                const num1 = parseInt(stack.pop());
                const num2 = parseInt(stack.pop());
                if (token === '+') {
                    result = num2 + num1;
                } else if (token === '-') {
                    result = num2 - num1;
                } else if (token === '*') {
                    result = num2 * num1;
                } else {
                    result = Math.trunc(num2 / num1);
                }
                stack.push(result);
            }
        }
        return stack.pop();
    }
}
