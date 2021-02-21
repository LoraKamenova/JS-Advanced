function solve() {
    //създаваме обект с броя аргументи от всеки тип
    const argTypes = {};

    //обхождаме аргументите
    for(let arg of arguments) {
        //отпечатваме типа и стойността на всеки аргумент
        const type = typeof arg;
        console.log(`${type}: ${arg}`);
        //броим типа на аргумента
        if (argTypes[type] === undefined) {
            argTypes[type] = 0;
        }
        argTypes[type]++;
    }

    //печатаме броя
    Object.entries(argTypes).sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}