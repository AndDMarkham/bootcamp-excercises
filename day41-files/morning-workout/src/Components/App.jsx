import React from 'react';

import Person from './Person.jsx'

export default class App extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <>
                <h1>Attendance</h1>
                
                <div className="container">
                    <Person />
                </div>
            </>
        )
    }
}