function solve() {
    // запазваме референции към елементите, които ще манипулираме през целия живот на приложението
    const sections = document.querySelectorAll('section');
    const openDiv = sections.item(1).querySelectorAll('div').item(1);
    const progressDiv = sections.item(2).querySelectorAll('div').item(1);
    const finishedDiv = sections.item(3).querySelectorAll('div').item(1);

    const inputTask = document.querySelector('#task');
    const inputDesc = document.querySelector('#description');
    const inputDate = document.querySelector('#date');

    document.querySelector(' #add').addEventListener('click', addTask);

    //създаване на задачи (DOM елементи)
    function addTask(e) {
        e.preventDefault();
        //прочитаме съдържанието на формуляра и валидираме
        const taskName = inputTask.value.trim();
        const taskDesc = inputDesc.value.trim();
        const taskDate = inputDate.value.trim();

        if (taskName.length > 0 && taskDesc.length > 0 && taskDate.length > 0) {
            //създаваме елементи
            const startBtn = el('button', 'Start', {className: 'green'});
            const finishBtn = el('button', 'Finish', {className: 'orange'});
            const deleteBtn = el('button', 'Delete', {className: 'red'});

            const btnDiv = el('div', [
                startBtn,
                deleteBtn
            ], {className: 'flex'});

            const task = el('article', [
                el('h3', taskName),
                el('p', `Description: ${taskDesc}`),
                el('p', `Due Date: ${taskDate}`),
                btnDiv
            ]);

            //закачаме функционалност

            startBtn.addEventListener('click', () => {
                progressDiv.appendChild(task);
                startBtn.remove();
                btnDiv.appendChild(finishBtn);
            });
            
            finishBtn.addEventListener('click', () => {
                finishedDiv.appendChild(task);
                btnDiv.remove();
            });

            deleteBtn.addEventListener('click', () => {
                task.remove();
            })

            //добавяме елемента в DOM дървото
            openDiv.appendChild(task);
        }
    }
    

    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }

        return result;
    }
}