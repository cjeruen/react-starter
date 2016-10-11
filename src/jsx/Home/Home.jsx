import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    render() {
        return (
            <div className="home">
                <p>react starter demo Home</p>
            </div>
        );
    }
}

export default Home;
