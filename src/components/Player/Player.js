import React from 'react';
import playerShape from '../../helpers/props/playerShape';
import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card">
        <img className="card-img-top player-image" src={player.imgUrl} alt={player.name}></img>
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
        </div>
        <div className="card-footer">
          <i className="fas fa-trash-alt"></i>
          <i className="fas fa-edit"></i>
        </div>
      </div>
    );
  }
}

export default Player;
