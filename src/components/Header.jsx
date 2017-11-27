import React from 'react';
import Title from './Header/Title';

export default class Header extends React.Component {
    handleType(e) {
        const title = e.target.value;
        this.props.setTitle(title);
    }

    render() {
        return (
            <header>
                <Title title={this.props.title} />
                <input value={this.props.title} onChange={this.handleType.bind(this)} type="text"/>
            </header>
        )
    }
}