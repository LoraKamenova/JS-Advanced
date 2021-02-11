function solve(arr) {
    let number = Number(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if(arr[i] === "chop") {
            number = number / 2;
            console.log(number);
        } else if(arr[i] === "dice") {
            number = Math.sqrt(number);
            console.log(number);
        } else if(arr[i] === "spice") {
            number = number + 1;
            console.log(number);
        } else if(arr[i] === "bake") {
            number = number * 3;
            console.log(number);
        } else if(arr[i] === "fillet") {
            number = number * 0.8;
            console.log(number);
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);