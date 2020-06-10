import React, { Component } from 'react';

export default class TimeLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>我的timeline</div>;
  }
  componentDidMount() {
    console.log(this.props);
  }
}
