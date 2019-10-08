class Timer {
    constructor (value, intervalID) {
        this.value = value;
        this.intervalID = intervalID;
    }

    increment() {
        this.value += 1;
        this.update();
    }

    decrement() {
        if (this.value > 0) {
            this.value -= 1;
            this.update();
        } else {
            this.stopCountdown();
            this.reset();
        }
    }

    countdown() {
        if (this.value > 0) {
            this.intervalID = setInterval(() => {this.decrement()}, 1000);
        }    
    }

    stopCountdown() {
        window.clearInterval(this.intervalID);
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'timer';
        this.element.innerHTML = (
            `<div id="reset" class="reset">Reset</div>
             <div class="set-timer">
                <div id="plus" class="top-arrow"></div>
                <div id="counter" class="counter">0</div>
                <div id="minus" class="bottom-arrow"></div>
             </div>
             <div id="start-stop" class="start-stop">Start</div>`  
        );

        this.update();

        const plus = this.element.querySelector('#plus');
        plus.addEventListener('click', () => {
            this.increment();
        });

        const minus = this.element.querySelector('#minus');
        minus.addEventListener('click', () => {
            this.decrement();
        });

        const start = this.element.querySelector('#start-stop');
        start.addEventListener('click', () => {
            if (this.intervalID === null) {
                this.countdown();
                start.textContent = 'Stop';
            } else {
                this.stopCountdown();
                this.intervalID = null;
                start.textContent = 'Start';
            }
        });

        const resetBtn = this.element.querySelector('#reset');
        resetBtn.addEventListener('click', () => {
            this.reset();
            start.textContent = 'Start';
        });

        return this.element;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }


    reset() {
        this.stopCountdown();
        this.intervalID = null;
        this.value = 0;
        this.update();
    }

    update() {
        const counter = this.element.querySelector('#counter');
        counter.textContent = `${this.value}`; 
    }

}