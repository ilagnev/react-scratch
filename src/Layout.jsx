import React from 'react';
import { Router, Route, HashRouter } from "react-router-dom";
// import { Link, NavLink } from "react-router-dom";

import Nav from './components/Nav';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Todos from './pages/Todos';
import Settings from './pages/Settings';

import Header from './components/Header'
import Footer from './components/Footer'
import Ad from './components/Ad'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pageTitle: 'Home'};
    }
    setPageTitle(title) {
        console.log('title will be set to: ', title);
        this.setState({pageTitle: title});
    }

    render() {
        // console.log('layout props', this.props);
        const { location } = this.props;
        return (
            <div>

                <Nav location={location}/>

                <div class="container">

                    <Header title={this.state.pageTitle}/>

                    <Ad/>

                    {/* {this.props.children} */}
                    <Route exact path="/" render={props => (
                        <Home {...props} setPageTitle={this.setPageTitle.bind(this)} />
                    )}/>
                    <Route exact path="/articles" render={props => (
                        <Articles {...props} setPageTitle={this.setPageTitle.bind(this)} />
                    )}/>
                    <Route exact path="/articles/:article" render={props => (
                        <Article {...props} setPageTitle={this.setPageTitle.bind(this)} />
                    )}/>
                    <Route exact path="/todos" render={props => (
                        <Todos {...props} setPageTitle={this.setPageTitle.bind(this)} />
                    )}/>
                    <Route exact path="/settings" render={props => (
                        <Settings {...props} setPageTitle={this.setPageTitle.bind(this)} />
                    )}/>

                    <Footer/>
                </div>
            </div>
        )
    }
}