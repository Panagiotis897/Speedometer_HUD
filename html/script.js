document.addEventListener('DOMContentLoaded', function () {
    const speedElement = document.querySelector('.speed-number');
    const gearElement = document.querySelector('.gear .value');
    const rpmProgress = document.querySelector('.rpm .progress');
    const fuelProgress = document.querySelector('.fuel .progress');
    const container = document.querySelector('.container');

    function updateSpeed(value) {
        speedElement.textContent = value;
    }

    function updateGear(value) {
        gearElement.textContent = value;
    }

    function updateRPM(percentage) {
        let color;

        if (percentage > 66) {
            color = 'hsl(0, 100%, 50%)';
        } else if (percentage > 33) {
            color = 'hsl(45, 100%, 50%)';
        } else {
            color = 'hsl(120, 100%, 40%)';
        }

        rpmProgress.style.width = percentage + '%';
        rpmProgress.style.backgroundColor = color;
    }

    function updateFuel(percentage) {
        fuelProgress.style.width = percentage + '%';
    }

    function showSpeedometer() {
        container.classList.add('show');
    }

    function hideSpeedometer() {
        container.classList.remove('show');
    }

    window.addEventListener('message', function(event) {
        const data = event.data;

        if (data.action === 'updateSpeed') {
            updateSpeed(data.value);
            showSpeedometer();
        } else if (data.action === 'updateGear') {
            updateGear(data.value);
        } else if (data.action === 'updateRPM') {
            updateRPM(data.percentage);
        } else if (data.action === 'updateFuel') {
            updateFuel(data.percentage);
        } else if (data.action === 'hideUI') {
            hideSpeedometer();
        }
    });
});