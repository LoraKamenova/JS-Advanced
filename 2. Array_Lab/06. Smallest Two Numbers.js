function solve(arr) {
    let result = [];
    arr.sort(function(a, b){return a - b});

    for (let i = 0; i <= 1; i++) {
        result.push(arr[i]);
    }

    console.log(result.join(' '))
}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);