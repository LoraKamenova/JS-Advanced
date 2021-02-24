class VeterinaryClinic {

    constructor(clinicName, capacity) {
        this.clinicName = clinicName,
            this.capacity = capacity,
            this.clients = [],
            this.totalProfit = 0,
            this.currentWorkLoad = 0
    }

    newCustomer(ownerName, petName, kind, procedures) {
        kind = kind.toLowerCase();
        let isAdded = false;
        if (this.capacity == this.currentWorkLoad) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }

        this.clients.forEach(client => {
            if (client.owner == ownerName && client.hasOwnProperty(petName) && client[petName].procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${client[petName].procedures.join(', ')}.`);
            } else if (client.owner == ownerName) {
                client[petName] = { kind, procedures }
                isAdded = true;
            }
        })

        if (!isAdded) {
            const petObject = {
                owner: ownerName,
                [`${petName}`]: {
                    kind,
                    procedures
                }
            }
            this.clients.push(petObject);
        }

        this.currentWorkLoad++;
        return (`Welcome ${petName}!`);
    }

    onLeaving(ownerName, petName) {

        let clientNameObject;
        for (let client of this.clients) {
            if (client.owner == ownerName) {
                clientNameObject = client;
                break;
            }
        }

        if (!clientNameObject) {
            throw new Error('Sorry, there is no such client!');
        } else {
            if (!clientNameObject.hasOwnProperty(petName) || clientNameObject[petName].procedures.length == 0) {
                throw new Error(`Sorry, there are no procedures for ${petName}!`);
            } else {
                this.currentWorkLoad--;
                let money = clientNameObject[petName].procedures.length * 500;
                this.totalProfit += money;
                clientNameObject[petName].procedures = [];
                return `Goodbye ${petName}. Stay safe!`;
            }
        }
    }

    toString() {
        let percentage = (this.currentWorkLoad / this.capacity) * 100;
        let returnArr = [`${this.clinicName} is ${percentage}% busy today!`, `Total profit: ${this.totalProfit.toFixed(2)}$`];


        let customersArray = this.clients.sort((a, b) => a.owner.localeCompare(b.owner));

        customersArray.forEach(customer => {
            let arr = [`${customer.owner} with:`];

            let list = Object.entries(customer);
            list.shift();
            list = list.sort((a, b) => a[0].localeCompare(b[0]));
            list.forEach(pet => {
                arr.push(`---${pet[0]} - a ${pet[1].kind} that needs: ${pet[1].procedures.join(', ')}`);
            })
            // console.log(list);

            returnArr.push(arr.join('\n'));
        })

        return returnArr.join('\n');
    }
}