import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';
import Navbar from '../components/Navbar/Navbar';
import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.listener = firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ authed: true }) : this.setState({ authed: false });
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <Navbar authed={authed}/>
        <h2>Sports Roster</h2>
        <button className="btn btn-info"><i className="fas fa-quidditch"></i> SPORTS <i className="fas fa-quidditch"></i></button>
      </div>
    );
  }
}

export default App;
