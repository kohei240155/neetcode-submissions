class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;

        let left = 0;
        let right = m * n - 1;

        while (left <= right) {
            const mid = Math.floor((right + left) / 2);

            const row = Math.floor(mid / n);
            const col = mid % n;

            const value = matrix[row][col];

            if (value < target) {
                left = mid + 1;
            } else if (target < value) {
                right = mid - 1;
            } else {
                return true;
            }
        }

        return false;
    }
}
