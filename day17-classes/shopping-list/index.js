const groceryList = [
    { name: 'milk', amount: '1 lt'},
    { name: 'apples', amount: '8'},
    { name: 'flour', amount: '1 kg'},
    { name: 'cinnamon', amount: '2 sticks'},
    { name: 'nutmeg', amount: '1'},
    { name: 'sugar', amount: '1 kg'},
    { name: 'lemon', amount: '2'},
    { name: 'cardamom', amount: '1 pod'}
]

document.addEventListener('DOMContentLoaded', () => {
    const listElm = document.querySelector('#list');
    for (const item of groceryList) {
        const listItem = document.createElement('div');
        listItem.className = `list-item`;
        listItem.innerHTML = (
            `<div>${item.name}</div>
             <div>${item.amount}</div>
             <input type="checkbox" class="check"/>`
        );
        
        const checkBox = listItem.querySelector('.check');
        checkBox.addEventListener('change', () => {
            if (item.checked) {
                item.checked = false;
                listItem.style.backgroundColor = 'lightcoral';
            } else {
                item.checked = true;
                listItem.style.backgroundColor = 'skyblue';
            };
        });    
        
        listElm.appendChild(listItem);
    }
})