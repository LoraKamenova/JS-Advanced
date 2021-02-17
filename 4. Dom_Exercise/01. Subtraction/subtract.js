// function subtract() {
//     const firstNumber = document.getElementById('firstNumber');
//     const secondNumber = document.getElementById('secondNumber')
//     const resultDiv = document.getElementById('result');
//     let result = document.createElement('p');
//
//     result.innerHTML = +firstNumber.value - +secondNumber.value;
//
//     resultDiv.appendChild(result);
// }

function subtract() {
    document.getElementById('result').textContent =
        Number(document.getElementById('firstNumber').value) -
        Number(document.getElementById('secondNumber').value);
}