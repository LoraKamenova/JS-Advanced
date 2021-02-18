function addItem() {
    let input = document.getElementById('newItemText');
    let menu = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = input.value;

    menu.appendChild(newLi);
    input.value = '';
}