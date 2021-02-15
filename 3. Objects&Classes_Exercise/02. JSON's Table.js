function solve(arr) {

    let result = [];

    let tableString = '<table>\n'
    for (let i = 0; i < arr.length; i++) {
        let obj = JSON.parse(arr[i]);

        let tableRow = `	<tr>\n		<td>${obj.name}</td>\n		<td>${obj.position}</td>\n		<td>${Number(obj.salary)}</td>\n	</tr>\n`

        tableString +=tableRow;

    }

    tableString += '</table>';
    console.log(tableString);
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);
