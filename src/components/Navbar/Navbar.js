import React from 'react';
import Auth from '../Auth/Auth';

class Navbar extends React.Component {
  render() {
    const { authed } = this.props;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h4 className="navbar-brand">Average Joe's</h4>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Auth authed={authed}/></li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;
