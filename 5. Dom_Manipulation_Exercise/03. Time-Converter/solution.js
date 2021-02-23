// function attachEventsListeners() {
//
//     const daysButton = document.getElementById('daysBtn');
//     const hoursButton = document.getElementById('hoursBtn');
//     const minutesButton = document.getElementById('minutesBtn');
//     const secondsButton = document.getElementById('secondsBtn');
//
//     daysButton.addEventListener('click', fromDays);
//     hoursButton.addEventListener('click', fromHours);
//     minutesButton.addEventListener('click', fromMinutes);
//     secondsButton.addEventListener('click', fromSeconds);
//
//
//     function fromDays(){
//         let daysInput = Number(document.getElementById('days').value);
//
//         let hoursInput = document.getElementById('hours');
//         let minutesInput = document.getElementById('minutes');
//         let secondsInput = document.getElementById('seconds');
//
//         hoursInput.value = daysInput * 24;
//         minutesInput.value = daysInput * 24 * 60;
//         secondsInput.value = daysInput * 24 * 60 * 60;
//     }
//
//     function fromHours(){
//         let hoursInput = Number(document.getElementById('hours').value);
//
//         let daysInput = document.getElementById('days');
//         let minutesInput = document.getElementById('minutes');
//         let secondsInput = document.getElementById('seconds');
//
//         daysInput.value = hoursInput / 24;
//         minutesInput.value = hoursInput * 60;
//         secondsInput.value = hoursInput * 60 * 60;
//     }
//
//     function fromMinutes(){
//         let minutesInput = Number(document.getElementById('minutes').value);
//
//         let daysInput = document.getElementById('days');
//         let hoursInput = document.getElementById('hours');
//         let secondsInput = document.getElementById('seconds');
//
//         daysInput.value = minutesInput / 60 / 24;
//         hoursInput.value = minutesInput / 60;
//         secondsInput.value = minutesInput * 60;
//     }
//
//     function fromSeconds(){
//         let secondsInput = Number(document.getElementById('seconds').value);
//
//         let daysInput = document.getElementById('days');
//         let hoursInput = document.getElementById('hours');
//         let minutesInput = document.getElementById('minutes');
//
//         daysInput.value = secondsInput / 60 / 60 / 24;
//         hoursInput.value = secondsInput / 60 / 60;
//         minutesInput.value = secondsInput / 60;
//     }
// }

function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, from) {
        const inDays = value / ratios[from];
        return {
            days: inDays * ratios.days,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        };
    }

    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    document.querySelector('#daysBtn').addEventListener('click', convertDays);
    document.querySelector('#hoursBtn').addEventListener('click', convertHours);
    document.querySelector('#minutesBtn').addEventListener('click', convertMinutes);
    document.querySelector('#secondsBtn').addEventListener('click', convertSeconds);

    function convertDays(e) {
        const value = Number(days.value);
        const convertedValues = convert(value, 'days');
        display(convertedValues);
    }

    function convertHours(e) {
        const value = Number(hours.value);
        const convertedValues = convert(value, 'hours');
        display(convertedValues);
    }

    function convertMinutes(e) {
        const value = Number(minutes.value);
        const convertedValues = convert(value, 'minutes');
        display(convertedValues);
    }

    function convertSeconds(e) {
        const value = Number(seconds.value);
        const convertedValues = convert(value, 'seconds');
        display(convertedValues);
    }

    function display(values) {
        days.value = values.days;
        hours.value = values.hours;
        minutes.value = values.minutes;
        seconds.value = values.seconds;
    }
}