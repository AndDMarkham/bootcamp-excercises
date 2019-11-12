import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                {
                    this.props.grid.map((row) => (
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            {
                                row.map((item) => (
                                    <div style={{width: '10vw', height: '10vh', backgroundColor: 'darkgrey', padding: '2px', margin: '3px', textAlign: 'center'}}>
                                        <h4>{item}</h4>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </>
        )
    }
}