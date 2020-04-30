/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */

let numberCount = document.querySelector('.timer-down').innerText;
let setUpTimer = document.querySelector('.setup-timer');
let minutes = document.querySelector('.minutes').innerText;
let isRunning = false;
let interval;
let time = 60 * minutes;

function start() {
    if (isRunning) return;
    isRunning = true;
    interval = setInterval(decrementTimer, 1000);
}

function stop() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(interval);
}

let decrementTimer = () => {
    minutes = Math.floor(time / 60);
    let seconds = padStart(time % 60);
    minutes = numberCount - 1;
    setUpTimer.innerText = `${minutes}:${seconds}`;
    time--;
};

const padStart = (number) => {
    return (number < 10) ? '0' + number : number;
};

function addOne() {
    if (!isRunning) {
        numberCount++;
        minutes++;
        document.querySelector('.timer-down').innerText = padStart(numberCount);
        document.querySelector('.minutes').innerText = padStart(minutes);
    }
}

function removeOne() {
    if (!isRunning) {
        minutes--;
        numberCount--;
        document.querySelector('.timer-down').innerText = padStart(numberCount);
        document.querySelector('.minutes').innerText = padStart(minutes);
        if (numberCount === 1) {
            alert('you can\'t go below 1!');
            numberCount.innerText = 1;
        }
    }
}