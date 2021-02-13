function solve(arr) {
    let nStep = Number(arr[arr.length - 1]);
    arr.pop();

    for (let i = 0; i < arr.length; i+=nStep) {
        console.log(arr[i]);
    }
}

solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']);

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']);

solve(['1',
    '2',
    '3',
    '4',
    '5',
    '6']);