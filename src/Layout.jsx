import React from 'react';
import { Link } from "react-router-dom";
// import Header from './Header'
// import Footer from './Footer'

export default class Layout extends React.Component {
    navigate() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Layout</h1>
                
                {this.props.children}
                
                <Link to="articles" className="btn">articles</Link>
                <Link to="settings" className="btn btn-success">settings</Link>
            </div>
        )
    }
}