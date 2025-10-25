function updateClock() {
    const now = new Date();
    const hours = String(now.getUTCHours() + 3).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

}

setInterval(updateClock, 1000);