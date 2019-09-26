const changeTitle = () => {
  const myText = document.querySelector('#my-text');
  const text = myText.value;

  const title = document.querySelector('#title');
  title.textContent = `Hello ${text}, how are you?`;
  title.className = 'heading';
  title.style.color = 'blue';
}

document.addEventListener('DOMContentLoaded', () => {
  const myBtn = document.querySelector('#my-btn');
  myBtn.addEventListener('click', changeTitle); 
})

