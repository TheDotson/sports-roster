import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Sports-Roster</h1>
        <button className="btn btn-info">
        <i className="fas fa-quidditch"></i> SPORTS <i className="fas fa-quidditch"></i></button>
      </div>
    );
  }
}

export default App;
