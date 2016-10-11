import React from 'react';


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Content';
    }
    render() {
        return (
            <div className="content">
                {this.props.children}
            </div>
        );
    }
}

export default Content;
