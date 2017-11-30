import React from 'react';

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        props.setPageTitle('Settings')
    }
    render() {
        return <span>settins content</span>
    }
}