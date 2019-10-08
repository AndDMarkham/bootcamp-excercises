let intervalID = null;
let value = 0;

const update = () => {
    const counter = document.querySelector('#counter');
    counter.textContent = `${value}`; 
};

const increment = () => {
    value += 1;
    update();
};

const decrement = () => {
    if (value > 0) {
        value -= 1;
        update();
    } else {
        stopCountdown()
        reset()
    }
};

const stopCountdown = () => {
    window.clearInterval(intervalID);
}

const countdown = () => {
    if (value >= 0) {
        intervalID = window.setInterval(decrement, 1000);
    }
};

const reset = () => {
    stopCountdown();
    intervalID = null;
    value = 0;
    update();
}

document.addEventListener('DOMContentLoaded', () => {
    update();
    
    const plus = document.querySelector('#plus');
    plus.addEventListener('click', () => {
        increment();
    });

    const minus = document.querySelector('#minus');
    minus.addEventListener('click', () => {
       decrement();
    });

    const start = document.querySelector('#start-stop');
    start.addEventListener('click', () => {
        if (intervalID === null) {
            countdown();
            start.textContent = 'Stop';
        } else {
            stopCountdown();
            start.textContent = 'Start';
            intervalID = null;
        }
    });

    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        reset();
    });

});
