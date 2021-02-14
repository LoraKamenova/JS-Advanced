function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' <-> ');
        let town = row[0];
        let number = Number(row[1]);
        if (obj.hasOwnProperty(row[0])) {
            obj[row[0]] += parseFloat([row[1]]);
        } else {
            obj[row[0]] = parseFloat([row[1]]);
        }
    }

    for (const key of Object.keys(obj)) {
        console.log(`${key} : ${obj[key]}`);
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);