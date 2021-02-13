function solve(arr) {
    let result = [];
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(count);
        } else if (arr[i] === 'remove') {
            result.pop();
        }
        count++;
    }

    if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    } else {
        console.log('Empty')
    }
}

solve(['add',
    'add',
    'add',
    'add']);

solve(['add',
    'add',
    'remove',
    'add',
    'add']);

solve(['remove',
    'remove',
    'remove']);