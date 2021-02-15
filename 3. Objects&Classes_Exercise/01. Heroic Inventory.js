function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' / ');
        let name = row[0];
        let level = Number(row[1]);
        let inventory = []
        if (row.length > 2) {
            inventory = row[2].split(', ');
        }


        let obj = {};
        let items = [];
        for (let j = 0; j < inventory.length; j++) {
            items.push(inventory[j]);
        }

        if (!obj.hasOwnProperty(name)) {
            obj['name'] = name;
            obj['level'] = level;
            obj['items'] = items;
        }

        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

solve(['Jake / 1000 / Gauss, HolidayGrenade']);