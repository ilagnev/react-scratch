import React from 'react';

import Header from './Header'
import Footer from './Footer'

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: "Welcome Nick"};
    }

    setTitle(title) {
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Header setTitle={this.setTitle.bind(this)} title={this.state.title}/>
                <Footer/>
            </div>
        )
    }
}