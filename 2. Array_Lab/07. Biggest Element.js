function solve(arr) {
    let result = [];
    let biggest = 0;
    for (let i = 0; i < arr.length; i++) {

        arr[i].sort(function(a, b){return a - b});
        let localBiggest = arr[i].pop();
        result.push(localBiggest);
    }

    result.sort(function(a, b){return a - b});
    biggest = result.pop();
    console.log(biggest);

}

solve([[20, 50, 10],
           [8, 33, 145]]);

solve([[3, 5, 7, 12],
           [-1, 4, 33, 2],
           [8, 3, 0, 4]])