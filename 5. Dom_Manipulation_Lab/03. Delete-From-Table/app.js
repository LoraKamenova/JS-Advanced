function deleteByEmail() {
    // let input = document.querySelector('input[type=text]');
    let input = document.querySelector('input[name=email]');
    let tableRows = Array.from(document.querySelectorAll("#customers td:last-child"));
    let result = document.getElementById('result');

    if(!input.value) {
        return;
    }

    let td = tableRows.find(function (td) {
        return td.innerHTML === input.value;
    })

    if(!td) {
        result.innerText = "Not found.";
        return;
    }

    td.parentElement.remove();
    result.innerText = "Deleted."

    input.value = '';

}