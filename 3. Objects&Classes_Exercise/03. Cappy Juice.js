function solve(arr) {
    let obj = {};
    let obj2 = {};
    let remaining = 0;
    let numberBottles = 0;

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' => ')
        let fruit = row[0];
        let qty = Number(row[1]);

        if (obj.hasOwnProperty(fruit)) {
            obj[fruit] += qty;
        } else {
            obj[fruit] = qty;
        }

        if (obj[fruit] >= 1000) {
            remaining = obj[fruit] % 1000;
            numberBottles = (obj[fruit] - remaining) / 1000;
            obj[fruit] = obj[fruit] % 1000;

            if (obj2.hasOwnProperty(fruit)) {
                obj2[fruit] += numberBottles;
            } else {
                obj2[fruit] = numberBottles;
            }
        }
    }
    for (var key in obj2) {
        console.log(`${key} => ${obj2[key]}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);