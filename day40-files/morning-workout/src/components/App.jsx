import React from 'react';

import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx'
import Main from './Main/Main.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div id="page">

                    <Header />

                    <Main />

                    <Footer />

                </div>
          
            </>
        )
    }
}