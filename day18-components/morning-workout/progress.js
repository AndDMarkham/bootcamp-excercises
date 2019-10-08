class ProgressBar {
    constructor(value, max, color) {
      this.value = value;
      this.max = max;
      this.color = color;
    }
  
    increment() {
      if (this.value < this.max) {
        this.value += 1;
        this.update();
      }
    }
  
    decrement() {
      if (this.value > 0) {
        this.value -= 1;
        this.update();
      }
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'progress-bar';
        this.element.innerHTML = (
        `<div id="label" class="label">
            <span id="counter"></span>/<span id="maximum"></span>
         </div>
         <div class="progress">
           <div id="minus" class="btn-minus"></div>
           <div class="bar">
             <div id="knob" class="knob"></div>
           </div>
           <div id="plus" class="btn-plus"></div>
         </div>`
       );

        this.update();

        const minus = this.element.querySelector('#minus');
        minus.addEventListener('click', () => {
            this.decrement(); 
        });
        const plus = this.element.querySelector('#plus');
        plus.addEventListener('click', () => {
            this.increment();
        });

       return this.element;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update() {
        const maximum = this.element.querySelector('#maximum')
        const counter = this.element.querySelector('#counter');
        const knob = this.element.querySelector('#knob');
        const step = 100 / this.max;
        maximum.textContent = `${this.max}`;
        counter.textContent = `${this.value}`;
        knob.style.width = `${this.value * step}%`;
        knob.style.backgroundColor = `${this.color}`;
      }
  }