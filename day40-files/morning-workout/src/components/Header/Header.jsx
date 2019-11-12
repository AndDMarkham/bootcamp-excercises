import React from 'react';
import Nav from './Nav.jsx';
import UserInfo from './UserInfo.jsx'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header>
                    <img src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png" alt="Aperture science" className="logo" />

                    <UserInfo />

                    <Nav />
                </header>
        
            </>
        )
    }
}