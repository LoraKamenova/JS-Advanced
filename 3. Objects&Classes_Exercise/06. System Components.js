function solve(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' | ');
        let system = row[0];
        let component = row[1];
        let subcomponent = row[2];

        if (!obj[system]) {
            obj[system] = {};
        }

        if (!obj[system][component]) {
            obj[system][component] = [];
        }

        obj[system][component].push(subcomponent);
    }

    let sortedList = sortSystems();

    function sortSystems() {
        let sortedSystems = Object.keys(obj)
            .sort((a, b) => a.localeCompare(b))
            .sort((a, b) => Object.values(obj[b]).length - Object.values(obj[a]).length);
        return sortedSystems;
    }
    function sortComponents(obj1) {
        let sortedComponents = Object.keys(obj1)
            .sort((a, b) => obj1[b].length - obj1[a].length);
        return sortedComponents;
    }
    function printResult(sortedList) {
        for (let i of sortedList) {
            console.log(i);
            let sortedComponents = sortComponents(obj[i]);
            for(let j of sortedComponents){
                console.log(`|||${j}`);
                for(let k of obj[i][j]){
                    console.log(`||||||${k}`);
                }
            }
        }
    }

    printResult(sortedList);
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'])