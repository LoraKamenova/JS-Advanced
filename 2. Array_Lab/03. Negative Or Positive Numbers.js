function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            result.push(arr[i]);
        } else {
            result.unshift(arr[i]);
        }
    }

    for (let i = 0; i < result.length; i++) {
        console.log(result[i]);
    }
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);