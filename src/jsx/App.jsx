import React from 'react';

import Header from './Common/Header';
import Footer from './Common/Footer';
import Content from './Common/Content';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        const excludePath = ['', '/', '/login', '/register'];
        const childRoutePath = this.props.children.props.location.pathname;

        if( childRoutePath.indexOf(childRoutePath) >= 0 ) {
            return (
                <div className="app">
                    {this.props.children}
                </div>
            );
        }
        return (
            <div className="app">
                <Header></Header>
                <Content>{this.props.children}</Content>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
