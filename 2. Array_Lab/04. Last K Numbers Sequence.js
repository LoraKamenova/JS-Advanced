function solve(n, k) {
    let result = [];
    let sum = 1;

    for (let i = 0; i < n ; i++) {
        for (let j = Math.max((i - k), 0); j < i; j++) {
            sum += result[j]
        }
        result.push(sum);
        sum = 0;
    }
    console.log(result.join(' '));
}

solve(6, 3);
solve(8, 2);