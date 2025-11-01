
const clockElement = document.getElementById('clock');
const selectTimeZone = document.getElementById('timeZone');
const local_timeZone = document.getElementById('local_timeZone');

// function updateClock(time) {
function updateClock() {
    const now = new Date();
    const timeZone = parseInt(selectTimeZone.value, 10);
    // const hours = String(now.getUTCHours() + time);
    const hours = String(now.getUTCHours() + timeZone).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    local_timeZone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
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
selectTimeZone.addEventListener('change', updateClock)