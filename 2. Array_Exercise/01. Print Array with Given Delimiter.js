function solve(arr) {
    let delimiter = arr[arr.length - 1];
    arr.pop();
    console.log(arr.join(delimiter));
}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']);

solve(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']);