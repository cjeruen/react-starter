import React from 'react';

import { Link } from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }
    render() {
        return (
            <div className="flex-center position-ref full-height">
                <div className="top-right links">
                    <Link to={`/login`}>Login</Link>
                    <Link to={`/register`}>Register</Link>
                </div>
                <div className="content">
                    <div className="title m-b-md">
                        Welcome
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
