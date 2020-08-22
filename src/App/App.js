import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import authData from '../helpers/data/authData';
import fbConnection from '../helpers/data/connection';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Team from '../components/Team/Team';
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

    const loadComponent = () => {
      if (authed) {
        const uid = authData.getUid();
        return <Team uid={uid}/>;
      }
      return (
        <h2 className="text-center">Please login to view the roster</h2>
      );
    };

    return (
      <div className="App">
        <Navbar authed={authed}/>
        {loadComponent()}
        <Footer authed={authed}/>
      </div>
    );
  }
}

export default App;
