document.addEventListener('DOMContentLoaded', () => { 
  const app = document.querySelector('#app');
  const bar1 = new ProgressBar(10, 30, 'skyblue');
  bar1.mount(app);
  const bar2 = new ProgressBar(5, 10, 'lightseagreen');
  bar2.mount(app);
});