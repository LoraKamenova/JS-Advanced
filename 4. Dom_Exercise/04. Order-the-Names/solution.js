// function solve() {
//     let letters = {
//         A:[],
//         B:[],
//         C:[],
//         D:[],
//         E:[],
//         F:[],
//         G:[],
//         H:[],
//         I:[],
//         J:[],
//         K:[],
//         L:[],
//         M:[],
//         N:['Nixon'],
//         O:[],
//         P:['Peterson'],
//         Q:[],
//         R:[],
//         S:[],
//         T:[],
//         U:[],
//         V:[],
//         W:[],
//         X:[],
//         Y:[],
//         Z:[]
//     };
//
//     const dbIndex = {
//         A: 1,
//         B: 2,
//         C: 3,
//         D: 4,
//         E: 5,
//         F: 6,
//         G: 7,
//         H: 8,
//         I: 9,
//         J: 10,
//         K: 11,
//         L: 12,
//         M: 13,
//         N: 14,
//         O: 15,
//         P: 16,
//         Q: 17,
//         R: 18,
//         S: 19,
//         T: 20,
//         U: 21,
//         V: 22,
//         W: 23,
//         X: 24,
//         Y: 25,
//         Z: 26
//     };
//
//     document.querySelector("#exercise > article > button").addEventListener("click", addWord);
//
//     function addWord(){
//         let inputField = document.querySelector("#exercise > article > input[type=text]").value;
//         let firstLetter = inputField[0].toUpperCase();
//
//         let asd = firstLetter + inputField.substring(1).toLowerCase();
//         letters[firstLetter].push(asd);
//
//         let listItems = Array.from(document.querySelectorAll('ol li'));
//
//         listItems[dbIndex[firstLetter] - 1].textContent = letters[firstLetter].join(', ');
//     }
// }

function solve() {
    document.querySelector('button').addEventListener('click', onClick);
    const list = {};

    const items = document.querySelector('ol').querySelectorAll('li');
    [...items].forEach(e => {
        if (e.textContent.trim().length == 0) {
            return;
        }
        const letter = e.textContent[0].toLocaleUpperCase();
        list[letter] = e.textContent;
    });

    function onClick() {
        const input = document.querySelector('input');
        const value = input.value;
        const letter = value[0].toLocaleUpperCase();

        if (list.hasOwnProperty(letter) == false) {
            list[letter] = value;
        } else {
            list[letter] = list[letter] + ', ' + value;
        }

        const index = letter.charAt(0) - 65;
        items[index].textContent = list[letter];

        input.value = '';
    }
}