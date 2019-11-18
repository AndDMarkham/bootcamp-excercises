import React from 'react'
import { Link } from 'react-router-dom';

const navStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    color: 'lightgrey',
    justifyContent: 'space-between',
    width: '100vw',
    backgroundColor: 'navy',
    margin: '0'
}

const linkStyle = {
    textDecoration: 'none',
    color: 'lightgrey',
    marginRight: '5rem'
}

const Nav = props => {
    return (
        <div style={navStyle}>
            <h2 style={{ margin: '0' }}>
                My Applet
            </h2>
            <div>
                <Link style={linkStyle} to="/home"><h3>Home</h3></Link>
                <Link style={linkStyle} to="/user"><h3>User</h3></Link>
            </div>
        </div>
    )
}

export default Nav;