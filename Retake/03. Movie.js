class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalProfit = 0;
        this.totalSoldTickets = 0;
    }

    newScreening(date, hall, description) {
        if(this.screenings.find(c => c.hall === hall && c.date === date)) {
            throw new Error(`Sorry, ${this.screenings.hall} hall is not available on ${this.screenings.date}`);
        } else {
            this.screenings.push({
                date,
                hall,
                description,
            });

            return `New screening of ${this.movieName} is added.`;
        }
    }

    endScreening(date, hall, soldTickets) {
        const screening = this.screenings.find(c => c.hall === hall && c.date === date);
        const screeningIndex = this.screenings.findIndex(c => c.hall === hall && c.date === date);

        if(screening) {
            const currentProfit = this.ticketPrice * Number(soldTickets);
            this.totalProfit += currentProfit;
            this.totalSoldTickets += soldTickets;
            this.screenings.splice(screeningIndex, 1);
            return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit.toFixed(0)}`

        } else {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
    }

    toString() {
        const result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.totalSoldTickets}`,
        ];

        if(this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);

            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));

            this.screenings.forEach(r => {
                result.push(`${r.hall} - ${r.date} - ${r.description}`);
            });

        } else {
            result.push(`No more screenings!`);
        }
        return result.join('\n');
    }
}




