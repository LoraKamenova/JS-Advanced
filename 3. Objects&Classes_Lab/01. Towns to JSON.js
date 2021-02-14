function solve(arr) {
    let separator = /\s*\|\s*/gm;
    let headers = arr[0].split(separator).filter(function (el) {
        return el != '';
    });

    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let obj = {};
        let row = arr[i].split(separator).filter(function (el) {
            return el != '';
        });
        obj[headers[0]] = row[0];
        obj[headers[1]] = Number(Number(row[1]).toFixed(2));
        obj[headers[2]] = Number(Number(row[2]).toFixed(2));
        result.push(obj);

    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);
