function solve() {

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        }
    };

        //декларация на променливи за микроелементите
        const microelements = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };

        const operations = {
            restock,
            prepare,
            report
        };

        //декларация на вложени функции за обработка -> ивършват операция върху микроелементите
    function restock(element, qty) {
        microelements[element] += qty;
        return 'Success';
    }

    function prepare(recipe, qty) {
        const required = Object.assign({}, recipes[recipe]);
        required.order.forEach(key => required[key] *= qty);

        for (let element of required.order) {
            if(microelements[element] < required[element]) {
                return `Error: not enough ${element} in stock`;
            }
        }

        required.order.forEach(key => microelements[key] -= required[key]);

        return 'Success';
    }

    function report() {
    return `protein=${microelements.protein} carbohydrate=${microelements.carbohydrate} fat=${microelements.fat} flavour=${microelements.flavour}`;
    }

    //декларация на мениджър -> обработва входа и извиква една от функциите
    function manager(command) {
    const tokens = command.split(' ');
    return operations[tokens[0]](tokens[1], Number(tokens[2]));
    }

    //връщане на референция към мениджъра
    return manager;
}