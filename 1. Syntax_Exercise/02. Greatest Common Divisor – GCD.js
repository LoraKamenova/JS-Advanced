function solve(x, y) {

    while(y) {
        let t = y;
        y = x % y;
        x = t;
    }
    console.log(x);
}

solve(15, 5);
solve(2154, 458);