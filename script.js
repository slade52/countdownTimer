const daysEL = document.getElementById('days');
const hourEL = document.getElementById('hours');
const minutesEL = document.getElementById('minutes');
const secondsEL = document.getElementById('seconds');

const christmas_eve = '25 December 2023';

function countdown() {
    const ChristmasDate = new Date(christmas_eve);
    const currentDate = new Date();

    const totalSeconds = (ChristmasDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEL.innerHTML = days;
    hourEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEL.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
    
} 

function formatTime() {
    return time < 10 ? ('0${time}') : time;
}

countdown();

setInterval(countdown, 1000);