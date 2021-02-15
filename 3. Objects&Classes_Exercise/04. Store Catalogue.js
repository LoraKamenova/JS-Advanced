function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i].split('')[0];
        let replaced = arr[i].replace(' : ', ': ')

        if (!obj[firstLetter]) {
            obj[firstLetter] = [];
        }
        obj[firstLetter].push(replaced);

        obj[firstLetter].sort((a, b) => a.localeCompare(b))
    }

    const ordered = {};
    Object.keys(obj).sort().forEach(function (key) {
        ordered[key] = obj[key];
    });

    for (var key in ordered) {
        console.log(`${key}`);
        for (var key2 in ordered[key]) {
            console.log(`  ${obj[key][key2]}`);
        }
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

solve(['Banana : 2',
    'Rubic`s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);