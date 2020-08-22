import React from 'react';
import PropTypes from 'prop-types';
import playerData from '../../helpers/data/playerData';
import Player from '../Player/Player';
import './Team.scss';

class Team extends React.Component {
  static propTypes = {
    uid: PropTypes.string.isRequired,
  }

  state = {
    players: [],
  }

  componentDidMount() {
    const { uid } = this.props;
    playerData.getPlayersByUid(uid)
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  }

  render() {
    const { players } = this.state;
    const playerCard = players.map((player) => <Player key={player.id} player={player}/>);

    return (
      <div>
        <h1>Average Joe's Roster</h1>
        <div className="rosterContainer">
          {playerCard}
        </div>
      </div>
    );
  }
}

export default Team;