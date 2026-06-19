class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanumeric(s[l])) l++;
            while (r > l && !this.isAlphanumeric(s[r])) r--;

            if (r > l && s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    isAlphanumeric(str) {
        return (
            ("A" <= str && str <= "Z") || 
            ("a" <= str && str <= "z") ||
            ("0" <= str && str <= "9")
        );
    }
}
