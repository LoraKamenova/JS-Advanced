// function notify(message) {
//
//     const notification = document.getElementById('notification');
//
//     notification.innerText = message;
//     notification.style.display = "block";
//
//     setTimeout(function(){
//         notification.style.display = "none";
//     },2000);
// }

function notify(message) {
    const notification = document.querySelector('#notification');
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);

}