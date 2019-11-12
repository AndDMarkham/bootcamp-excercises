import React from 'react';
import Search from './Search.jsx';
import ProductList from './ProductList.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div id="main">
                <Search />

                <ProductList />
            </div>
        )
    }
}