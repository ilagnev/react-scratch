import React from "react";

export default class Greeting extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.name = this.props && this.props.name || 'Will';
  }
  render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.name}!</h1>
      </div>
    );
  }
};