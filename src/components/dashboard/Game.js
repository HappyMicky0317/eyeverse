import React from 'react';

import '../../assets/css/dashboard/Game.css';
import fighting from '../../assets/img/new/fighting.png';

class Game extends React.Component{

  render(){
  return(
    <div className="inside-game">
      <div>
        <div>
          <h1 className='subtitle text-format'>RedLord <span className='mini-text'>vs</span> EyeLord</h1>
        </div>
        <div className='fighting-container'>
          <img className='fighting-img' src={fighting} alt="" />
        </div>
      </div>
    </div>
  )
  }
}

export default Game;