function solve(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i+=2) {
        result.push(arr[i] * 2);
    }
    result.reverse();

    console.log(result.join(' '));
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);