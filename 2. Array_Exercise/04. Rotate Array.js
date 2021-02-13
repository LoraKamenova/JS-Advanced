function solve(arr) {
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();

    if(rotations === 0) {
        return console.log(arr.join(' '));
    } else {
        for (let i = 0; i < rotations%1000; i++) {
            arr.unshift(arr[arr.length - 1]);
            arr.pop();
        }
        console.log(arr.join(' '))
    }
}

solve(['1',
    '2',
    '3',
    '4',
    '2']);
solve(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']);