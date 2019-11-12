import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
       return ( 
            <>
                <div className="user">
                    <span>chell@aperture.sc</span><br/>
                    <a href="#">logout</a>
                </div>
            </>
       )
    }
}