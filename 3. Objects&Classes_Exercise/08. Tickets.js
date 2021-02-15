function solve(arr, criterion) {

    let result = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split('|');
        let destination = row[0];
        let price = Number(row[1]);
        let status = row[2];

        let ticket = new Ticket(destination, price, status);
        result.push(ticket);
    }


    if (criterion == 'destination') {
        result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criterion == 'price') {
        result.sort((a, b) => a - b);
    } else if (criterion == 'status') {
        result.sort((a, b) => a.status.localeCompare(b.status));
    }
    return result;
}