class Product {
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

    sell() {
        this.qty -= 1;
        return this.qty;
    }

    stock(count) {
        this.qty += count;
        return this.qty;
    }
}

const shoes = [
    new Product('Boots', '$300', 9),
    new Product('Sneakers', '$90', 20),
    new Product('Sandals', '$75', 3),
    new Product('Chucks', '$150', 0),
    new Product('High Tops', '$100', 14),
    new Product('High Heels', '$400', 2),
    new Product('Trainers', '$130', 9)
]

document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelector('#products');
    for (const item of shoes) {
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        productInfo.innerHTML = (
            `<div class="info">
                <h4>Shoe</h4>
                <span>${item.name}</span>
            </div>
            <div class="info">
                <h4>Price</h4>
                <span>${item.price}</span>
            </div>
            <div class="info">
                <h4>Quantity</h4>
                <span>${item.qty}</span>
            </div>
            <button class="btn">Buy</button>`
        );

        productInfo.querySelector('.btn').addEventListener('click', () => {
            item.sell();
        });

        products.appendChild(productInfo);
    }
})

