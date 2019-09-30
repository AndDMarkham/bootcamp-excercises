document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('#menu-btn');
  menuBtn.addEventListener('click', () => {
    const hiddenElement = document.querySelector('#side-menu');
    hiddenElement.classList.toggle('hidden-text');
  });
});