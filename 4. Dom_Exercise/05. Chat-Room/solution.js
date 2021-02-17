function solve() {
    document.getElementById('send').addEventListener('click', addMsg);

    function addMsg() {
        let input = document.getElementById('chat_input');
        let msgBox = document.getElementById('chat_messages');

        let newMsg = document.createElement('div');

        let name = "message my-message";
        newMsg.classList.add('message', 'my-message')

        newMsg.textContent = input.value;
        msgBox.appendChild(newMsg);
        input.value = '';
    }
}


