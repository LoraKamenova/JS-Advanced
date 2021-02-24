function solve() {
    const container = document.querySelector('#container').children;
    const inputName = container[0];
    const inputHall = container[1];
    const inputTicketPrice = container[2];

    const moviesOnScreen = document.querySelector('#movies > ul');
    const onScreenButton = Array.from(document.getElementsByTagName('button'))[0];

    const archive = document.querySelector('#archive > ul');
    const clearButton = document.querySelector('#archive > button');

    onScreenButton.addEventListener('click', addMovie);
    clearButton.addEventListener('click', clear);

    function addMovie(e) {
        e.preventDefault();

        const name = inputName.value;
        const hall = inputHall.value;
        const ticketPrice = Number(inputTicketPrice.value);

        if (inputName && inputHall && inputTicketPrice && ticketPrice) {

            const archiveBtn = el('button', 'Archive');
            const ticketsSold = el('input', '', {placeholder: 'Tickets Sold'});

            const movie = el('li', [
                el('span', name),
                el('strong', `Hall: ${hall}`),
                el('div', [
                    el('strong', ticketPrice.toFixed(2)),
                    ticketsSold,
                    archiveBtn
                ])
            ]);


            archiveBtn.addEventListener('click', function () {
                const soldTickets = Number(ticketsSold.value);
                let totalAmount = ticketPrice * soldTickets;
                if(ticketsSold && soldTickets) {


                    const deleteBtn = el('button', 'Delete');
                    const archivedMovie = el('li', [
                        el('span', name),
                        el('strong', `Total amount: ${totalAmount.toFixed(2)}`),
                        deleteBtn
                    ]);

                    deleteBtn.addEventListener('click', function () {
                        archivedMovie.remove();
                    });
                    movie.remove();
                    archive.appendChild(archivedMovie);
                }
            });

            moviesOnScreen.appendChild(movie);

            inputName.value = '';
            inputHall.value = '';
            inputTicketPrice.value = '';
        }

    }

    function clear(e) {
        archive.innerHTML = '';
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
            if (typeof node === 'string' || typeof node === 'number') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }

        return result;
    }
}