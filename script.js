//your code here
let hours = 0, minutes = 0, seconds = 0;
let interval = null;
let isPaused = false;

// Update the stopwatch display
function updateDisplay() {
    const time = document.getElementById('time');
    time.innerText = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start the stopwatch
function start() {
    if (!interval) {
        interval = setInterval(updateTime, 1000);
    }
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('stop').disabled = false;
}

// Update the time every second
function updateTime() {
    if (!isPaused) {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }
}

// Pause or continue the stopwatch
function pause() {
    isPaused = !isPaused;
    const pauseBtn = document.getElementById('pause');
    pauseBtn.innerText = isPaused ? 'Continue' : 'Pause';
}

// Stop the stopwatch and reset it
function stop() {
    clearInterval(interval);
    interval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    isPaused = false;
    updateDisplay();

    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('stop').disabled = true;
    document.getElementById('pause').innerText = 'Pause';
}
