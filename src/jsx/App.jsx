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
