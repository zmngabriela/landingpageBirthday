AOS.init();

const eventDay = new Date("Jun 8, 2024 17:00:00");
const eventTimestamp = eventDay.getTime();

const timeCounting = setInterval(function() {
    const now = new Date();
    const nowTimestamp = now.getTime();
    const timeUntilEvent = eventTimestamp - nowTimestamp;
    
    const daysTimestamp = Math.floor(timeUntilEvent / (1000 * 60 * 60 * 24));
    const hoursTimestamp = Math.floor(timeUntilEvent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutesTimestamp = Math.floor(timeUntilEvent % (1000 * 60 * 60) / (1000 * 60));
    const secondsTimestamp = Math.floor(timeUntilEvent % (1000 * 60) / 1000);

    document.querySelector('.countingDown').innerHTML = `${daysTimestamp}d ${hoursTimestamp}h ${minutesTimestamp}m ${secondsTimestamp}s`;

    if (timeUntilEvent < 0) {
        clearInterval(timeCounting);
        document.querySelectorAll('.hero__buttons__item--before').forEach(item => item.style.display = 'none');
        document.querySelector('.countingDown').innerHTML = 'We are open!';
        document.querySelector('.hero__buttons__item--after').style.display = 'block';
    }
}, 1000)

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.header__toggle');
    const navBar = document.querySelector('.header__nav');

    menuButton.addEventListener('click', function() {
        navBar.classList.toggle('header__nav--is-active');
    })
})