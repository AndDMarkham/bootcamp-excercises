document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  
  fetch('http://bootcamp.podlomar.org/api/snails/4')
    .then(response => response.json())
    .then(snailList => {
      for (snail of snailList){
        const snailRace = new Snail(snail.name, snail.velocity, snail.color);
        snailRace.mount(app);
      }
    })


  // const snail1 = new Snail('Itana', 20, 'lime');
  // snail1.mount(app);
  // const snail2 = new Snail('Jayne', 15, 'pink');
  // snail2.mount(app);
  // const snail3 = new Snail('Runi', 5, 'skyblue');
  // snail3.mount(app);
  // const snail4 = new Snail('Juan', 9, 'navy');
  // snail4.mount(app);
})