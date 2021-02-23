// function solve() {
//     let input = document.getElementById('searchField');
//     let body = document.querySelectorAll('tbody tr');
//
//     document.getElementById('searchBtn').addEventListener('click', search);
//     function search() {
//         for (let tr of body) {
//             tr.classList.remove('select');
//         }
//         if (input.value === '') {
//             return '';
//         }
//         for (let tr of body) {
//             if (tr.textContent.includes(input.value)) {
//                 tr.classList.add('select');
//             }
//         }
//         input.value = '';
//     }
// }

function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onSearch);
    const input = document.querySelector('#searchField');
    function onSearch() {
        const query = input.value.trim().toLocaleLowerCase();
        if (query.trim().length > 0) {
            const tbody = document.querySelector('tbody');
            [...tbody.querySelectorAll('tr')].forEach(r => {
                r.classList.remove('select');
            });
            [...tbody.querySelectorAll('td')].forEach(d => {
                if (d.textContent.trim.toLocaleLowerCase().includes(query)) {
                    d.classList.remove('select');
                }
            });
            input.value = '';
        }
    }
}