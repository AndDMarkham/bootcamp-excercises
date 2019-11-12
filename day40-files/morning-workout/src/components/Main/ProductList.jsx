import React from 'react';
import Product from './Product.jsx';

export default class ProductList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className="content">

                <h1>Products</h1>

                <div className="product-list">

                    <Product />

                </div>

            </div>
        )
    }
}