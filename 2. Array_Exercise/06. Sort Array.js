function solve(arr) {

    arr.sort(function (a, b) {
        let dCount = a.length - b.length;
        if(dCount) return dCount;

        let nameA = a.toUpperCase();
        let nameB = b.toUpperCase();
        if (nameA < nameB) { return -1; }
        if (nameA > nameB) { return 1; }
        return 0;
    });

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

solve(['alpha',
    'beta',
    'gamma']);

solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

solve(['test',
    'Deny',
    'omen',
    'Default']);
