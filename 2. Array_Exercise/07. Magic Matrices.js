function solve(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce(function(a, b) { return a + b; }, 0);
    let colSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        if ((matrix[i].reduce(function(a, b) { return a + b; }, 0) !== sum)) {
            isMagic = false;
            return console.log(isMagic);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }
        if (colSum !== sum){
            isMagic = false;
            return console.log(isMagic);
        }
        colSum = 0;
    }
    console.log(isMagic);
}

solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]);

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]);