import React from 'react';
import { Link, NavLink } from "react-router-dom";
// import Header from './Header'
// import Footer from './Footer'

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>Layout</h1>
                
                {this.props.children}
                
                <NavLink to="/articles" className="btn" activeClassName="btn-success">articles</NavLink>
                <Link to="/settings" className="btn btn-success">settings</Link>
            </div>
        )
    }
}