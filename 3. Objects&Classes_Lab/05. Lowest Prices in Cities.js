function solve(arr) {
    let products = new Map();
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' | ').filter(x => x !== '');
        let town = row[0];
        let product = row[1];
        let price = Number(row[2]);

        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let searchedTown = '';
        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                searchedTown = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${searchedTown})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);