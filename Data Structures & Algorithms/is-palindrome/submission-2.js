class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().split(' ').join('');

        let pureStr = [];
        for (const chr of str) {
            const c = /[a-z0-9]/.test(chr);
            if (c) {
                pureStr.push(chr);
            }
        }

        pureStr = pureStr.join('');
        let j = pureStr.length - 1;
        for (let i = 0; i < pureStr.length; i++) {
            if (pureStr[i] !== pureStr[j]) {
                return false;
            }
            j--;
        }
        return true;
    }
}
