function updateClock(time) {
    const now = new Date();
    const hours = String(now.getUTCHours() + time);
    const minutes = String(now.getUTCMinutes());
    const seconds = String(now.getUTCSeconds());

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    // console.log(`${hours}:${minutes}:${seconds}`);

    const selectTimeZone = document.getElementById('timeZone');
    timeZone = parseInt(selectTimeZone.value, 10);
    selectTimeZone.textContent = timeZone;

}

// console.log(new Date());
// console.log(new Date().getUTCHours() + 9);
// console.log(new Date().getUTCMinutes());
// console.log(new Date().getUTCSeconds());

let timeZone;

timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

let diffrent_time_UTC = new Date().getTimezoneOffset() / 60;
// console.log(timeZone)
// console.log(diffrent_time_UTC)

// updateClock(timeZone);
// updateClock(9);
setInterval(updateClock(9), 1000);