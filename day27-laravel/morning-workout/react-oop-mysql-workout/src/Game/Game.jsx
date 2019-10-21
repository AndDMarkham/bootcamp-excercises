import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div className="game">

                    <div className="header">
                        <h4 className="name"> { this.props.name } </h4>
    
                        <img src={ this.props.image_url } className="img"/>
                    </div>

                    <p> { this.props.description } </p>

                </div>
            </>
        );
    }
}