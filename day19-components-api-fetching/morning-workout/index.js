document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    const timer1 = new Timer(0, null);
    timer1.mount(app);
    const timer2 = new Timer(5, null);
    timer2.mount(app);
})