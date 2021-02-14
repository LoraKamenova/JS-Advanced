function solve(arr) {
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let town = arr[i];
        let number = Number(arr[i + 1]);
        if (obj.hasOwnProperty(arr[i])) {
            obj[arr[i]] += parseFloat([arr[i + 1]]);
        } else {
            obj[arr[i]] = parseFloat([arr[i + 1]]);
        }
    }
    console.log(JSON.stringify(obj));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
solve(['Sofia','20','Varna','3','sofia','5','varna','4']);