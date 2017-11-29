import React from 'react';

export default class Articles extends React.Component {
    render() {
        console.log(this.props);
        const { params } = this.props.match;
        return (
            <h1>Articles ({params.article})</h1>
        )
    }
}