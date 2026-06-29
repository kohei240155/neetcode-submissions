class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let left = 0;
        let right = ROWS * COLS - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const row = Math.floor(mid / COLS);
            const col = mid % COLS;

            if (target > matrix[row][col]) {
                left  = mid + 1;
            } else if (target < matrix[row][col]) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
