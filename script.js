// function updateClock(time) {
const clockElement = document.getElementById('clock');
function updateClock() {
    const now = new Date();
    // const hours = String(now.getUTCHours() + time);
    const hours = String(now.getUTCHours() + 3).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    // document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // console.log(`${hours}:${minutes}:${seconds}`);

    // const selectTimeZone = document.getElementById('timeZone');
    // timeZone = parseInt(selectTimeZone.value, 10);
    // // selectTimeZone.textContent = timeZone;
    // selectTimeZone.addEventListener('change', updateClock(timeZone))

}

// console.log(new Date());
// console.log(new Date().getUTCHours() + 9);
// console.log(new Date().getUTCMinutes());
// console.log(new Date().getUTCSeconds());

// let timeZone;

// timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// let diffrent_time_UTC = new Date().getTimezoneOffset() / 60;
// console.log(timeZone)
// console.log(diffrent_time_UTC)

// updateClock(timeZone);
// updateClock(9);
// setInterval(updateClock(9), 1000);
// setInterval(updateClock(timeZone), 1000);
setInterval(updateClock, 1000);