function solve(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);

    let firstDistance = Math.sqrt(x1 ** 2 + y1 ** 2);
    let secondDistance = Math.sqrt(x2 ** 2 + y2 ** 2);
    let thirdDistance = Math.sqrt((x2 - x1)** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(firstDistance)) {
        console.log('{' + x1 + ', ' + y1 + '} to {0, 0} is valid')
    } else {
        console.log('{' + x1 + ', ' + y1 + '} to {0, 0} is invalid')
    }
    if (Number.isInteger(secondDistance)) {
        console.log('{' + x2 + ', ' + y2 + '} to {0, 0} is valid')
    } else {
        console.log('{' + x2 + ', ' + y2 + '} to {0, 0} is invalid')
    }
    if (Number.isInteger(thirdDistance)) {
        console.log('{' + x1 + ', ' + y1 + '} to {' + x2 + ', ' + y2 + '} is valid')
    } else {
        console.log('{' + x1 + ', ' + y1 + '} to {' + x2 + ', ' + y2 + '} is invalid')
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);