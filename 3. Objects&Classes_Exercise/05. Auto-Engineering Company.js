function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' | ');
        let brand = row[0];
        let model = row[1];
        let qty = Number(row[2]);


        if (!obj[brand]) {
            obj[brand] = [];
        }

        let obj2 = {};
        if (!obj[brand][model]) {
            obj[brand][model] = qty;
        } else {
            obj[brand][model] += qty;
        }
    }
    for (var key in obj) {
        console.log(`${key}`);
        for (var key2 in obj[key]) {
            console.log(`###${key2} -> ${obj[key][key2]}`);
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);