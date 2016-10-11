import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
            <div className="app">
                <h1>react starter demo</h1>
            </div>
        );
    }
}

export default App;
