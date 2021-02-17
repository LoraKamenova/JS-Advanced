// function addItem() {
//     let text = document.getElementById('newItemText').value;
//     let value = document.getElementById('newItemValue').value;
//     let selectMenu = document.getElementById('menu');
//
//     let option = document.createElement('option');
//
//     option.value = value;
//     option.innerHTML = text;
//     selectMenu.appendChild(option);
//
//     document.getElementById('newItemText').value = '';
//     document.getElementById('newItemValue').value = '';
// }

function addItem() {
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');
    const text = textInput.value;
    const value = valueInput.value;

    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    document.querySelector('#menu').appendChild(option);

    textInput.value = '';
    valueInput.value = '';
}