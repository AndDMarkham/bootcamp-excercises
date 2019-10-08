const shoppingList = [
    ['apples', '1kg'],
    ['bacon', '200g'],
    ['beer', '6'],
    ['cheddar', '250g'],
    ['ice cream', '1kg'],
];

document.addEventListener('DOMContentLoaded', () => {
    const listElm = document.querySelector('.shopping-list'); 
    for (const item of shoppingList) {
        const html = (
            `<div class="shopping-list__item">
                <span>${item[0]}</span>
                <span>${item[1]}</span>
            </div>`
        );
        listElm.innerHTML += html;
    }; 
    
});
