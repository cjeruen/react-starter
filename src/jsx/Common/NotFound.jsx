import React from 'react';

import { Link } from 'react-router';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NotFound';
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
                        404
                    </div>
                    <div className="links">
                        <Link to={`/`}>Index</Link>
                        <Link to={`/`}>Index</Link>
                        <Link to={`/`}>Index</Link>
                        <Link to={`/`}>Index</Link>
                        <Link to={`/`}>Index</Link>
                </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
