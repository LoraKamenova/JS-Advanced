function solve(arr) {
    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let i = 0; i < arr.length; i++) {
        sumFirstDiagonal += Number(arr[i][i]);
        sumSecondDiagonal += Number(arr[i][arr.length - 1 - i]);
    }

    console.log(sumFirstDiagonal + ' ' + sumSecondDiagonal);
}

solve([[20, 40],
    [10, 60]]);
solve([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);