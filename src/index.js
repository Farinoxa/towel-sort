
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if ((i + 1) % 2 === 0) {
                matrix[i] = matrix[i].reverse();
            }
            arr = arr.concat(matrix[i]);
        }
        return arr;
    }
}
