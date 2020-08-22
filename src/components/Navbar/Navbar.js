/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Auth from '../Auth/Auth';
import './Navbar.scss';

class Navbar extends React.Component {
  render() {
    const { authed } = this.props;

    return (
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#"><img src="https://bit.ly/2YoNnDO" width="100" height="75" alt="Average Joe's"></img></a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Auth authed={authed}/></li>
          </ul>
        </nav>
    );
  }
}

export default Navbar;
