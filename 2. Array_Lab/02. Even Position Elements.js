function solve(arr) {
    let evenDigits = [];

    for (let i = 0; i < arr.length; i+=2) {
        evenDigits.push(arr[i]);
    }

    console.log(evenDigits.join(' '));
}

solve(['20', '30', '40']);
solve(['5', '10']);