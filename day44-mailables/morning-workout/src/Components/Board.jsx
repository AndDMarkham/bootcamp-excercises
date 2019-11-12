import React from 'react';
import Card from './Card.jsx';


export default class Board extends React.Component {
    constructor(props) {
        super(props)

        this.grid = [
            ['A', 'B', 'C', 'D'],
            ['E', 'F', 'G', 'H'],
            ['A', 'B', 'C', 'D'],
            ['E', 'F', 'G', 'H'],
            ['I', 'J', 'K', 'L'],
            ['I', 'J', 'K', 'L'],
        ]
    }

    render() {
        return (
            <div className="container" style={{width: '60vw', height: '60vh', margin: 'auto'}}>
                <Card grid={this.grid}/>
            </div>

        )
    }
}