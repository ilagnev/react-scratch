import React from 'react';

export default class Articles extends React.Component {
    componentDidMount() {
        const { history } = this.props;
        console.log('history obj', history);
        history.listen(e => {
            console.log('listen', e.pathname);
        });
    }
    render() {
        return (
            <h1>Articles</h1>
        )
    }
}