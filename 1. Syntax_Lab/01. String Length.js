function solve(str1, str2, str3) {
    const length = str1.length + str2.length + str3.length;
    const avg = Math.floor(length / 3);

    console.log(length);
    console.log(avg);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');