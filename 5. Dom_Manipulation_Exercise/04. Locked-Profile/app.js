// function lockedProfile() {
//     const showButtons = [...document.getElementsByTagName('button')];
//     showButtons.forEach(btn => btn.addEventListener('click', showHide));
//
//     function showHide(event) {
//         const button = event.target;
//         const profile = button.parentNode;
//         const moreInformation = profile.getElementsByTagName('div')[0];
//         const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
//
//         if (lockStatus === 'unlock') {
//             if (button.textContent === 'Show more') {
//                 moreInformation.style.display = 'inline-block';
//                 button.textContent = 'Hide it';
//             } else if (button.textContent === 'Hide it') {
//                 moreInformation.style.display = 'none';
//                 button.textContent = 'Show more';
//             }
//         }
//     }
// }

function lockedProfile() {
    document.querySelector('main').addEventListener('click', onClick);

    function onClick(e) {
        if (e.target.nodeName === 'BUTTON') {
            const parent = e.target.parentNode;
            const lock = parent.querySelector('input[type="radio"][value="lock"]');
            if (lock.checked) {
                return;
            }

            const hiddenFields = [...parent.querySelectorAll('div')]
                .filter(d => d.id.includes("HiddenFields"))[0];
            if (hiddenFields.style.display !== 'block') {
                hiddenFields.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                hiddenFields.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}