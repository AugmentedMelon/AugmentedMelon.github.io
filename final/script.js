let timer;
let isPaused = false;
let minutes = 15;
let seconds = 0;

function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        if (!isPaused) {
            if (seconds == 0) {
                if (minutes == 0) {
                    clearInterval(timer);
                    alert("Time is up!");
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            document.querySelector('.timer-circle').textContent = formatTime(minutes, seconds);
        }
    }, 1000);
}

function togglePauseResume() {
    let pauseResumeButton = document.querySelectorAll('.control-buttons button')[0];
    isPaused = !isPaused;
    if (isPaused) {
        pauseResumeButton.textContent = 'Resume';
    } else {
        pauseResumeButton.textContent = 'Pause';
        startTimer();
    }
}

function restartTimer() {
    clearInterval(timer);
    minutes = 15;
    seconds = 0;
    isPaused = false;
    document.querySelector('.timer-circle').textContent = formatTime(minutes, seconds);
    document.querySelectorAll('.control-buttons button')[0].textContent = 'Pause';
    startTimer();
}

function setStartTime() {
    let timeInput = prompt("Enter the number of minutes:");
    let newTime = parseInt(timeInput, 10);
    if (!isNaN(newTime) && newTime > 0) {
        minutes = newTime;
        seconds = 0;
        document.querySelector('.timer-circle').textContent = formatTime(minutes, seconds);
    } else {
        alert("Please enter a valid number.");
    }
}

function formatTime(min, sec) {
    return min.toString().padStart(2, '0') + ":" + sec.toString().padStart(2, '0');
}

// Initialize the timer display
document.querySelector('.timer-circle').textContent = formatTime(minutes, seconds);
