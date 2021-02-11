function solve(number) {
    let digits = number.toString().split('');
    let realDigits = digits.map(Number);
    let areDigitsSame = true;
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        if (realDigits[i] === realDigits[0]){

        } else{
            areDigitsSame = false;
        }
        sum += realDigits[i];
    }
    console.log(areDigitsSame);
    console.log(sum);
}
solve(2222222);
solve(1234);