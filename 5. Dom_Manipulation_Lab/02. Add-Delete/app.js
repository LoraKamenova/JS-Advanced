function addItem() {
    let input = document.getElementById('newText');
    let menu = document.getElementById('items');

    let newLi = document.createElement('li');
    let link = document.createElement('a');

    newLi.textContent = input.value;
    let linkText = document.createTextNode("[Delete]");
    link.appendChild(linkText);
    link.href = "#";

    newLi.appendChild(link);
    menu.appendChild(newLi);

    link.addEventListener('click', del);

    function del () {
        newLi.remove();
    }

    input.value = '';
}
