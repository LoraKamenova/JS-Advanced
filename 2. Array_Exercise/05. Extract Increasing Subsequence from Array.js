function solve(arr) {
    let max = [arr[0]];
    let result = [arr[0]];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i+1] >= max) {
            max = arr[i+1];
            result.push(arr[i+1])
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);

solve([1,
    2,
    3,
    4]);

solve([20,
    3,
    2,
    15,
    6,
    1]);