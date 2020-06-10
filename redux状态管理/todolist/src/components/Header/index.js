import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.oddEvent = this.oddEvent.bind(this);
  }

  oddEvent(match, location) {
    // if (!match) {
    //     return false
    //   }
    //   const eventID = parseInt(match.params.eventID)
    //   return !isNaN(eventID) && eventID % 2 === 1
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <NavLink
            to="/timeline?name=kaka#line33"
            exact
            isActive={this.oddEvent}
            activeStyle={{ color: 'red', fontSize: '14px' }}
          >
            timeline
          </NavLink>
        </li>
      </ul>
    );
  }
}
