function solve(steps, length, speed) {
    let distance = Number(steps) * Number(length);
    let restTime = Math.floor(distance/500) * 60;
    let convertedSpeed = Number(speed) / 3.6;
    let time = Math.round(distance / convertedSpeed + restTime);

    let result = new Date(time * 1000).toISOString().substr(11, 8);
    console.log(result)
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);