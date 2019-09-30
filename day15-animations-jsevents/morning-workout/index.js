const lock = document.querySelector('#lock');

const toggleMessage = () => {
    const hiddenMessage = document.querySelector('#hidden-message');
    hiddenMessage.hidden = true;
    lock.addEventListener('mouseenter', () => {
        hiddenMessage.hidden = false;
    });
    lock.addEventListener('mouseleave', () => {
        hiddenMessage.hidden = true;
    });
}

document.addEventListener('DOMContentLoaded', toggleMessage);