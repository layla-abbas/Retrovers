import React, { useState } from 'react';
import Board from './Board';
import '../Game.css';
import home from '../../images/home.png'
import { useNavigate } from 'react-router-dom';




const TicTacToe = () => {
  const [cells, setCells] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (cells[index] !== '' || winner) {
      return; 
    }

    cells[index] = currentPlayer;
    setCells([...cells]); 

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const condition = winningConditions[i];
      const [a, b, c] = condition;
      if (cells[a] === currentPlayer && cells[b] === currentPlayer && cells[c] === currentPlayer) {
        setWinner(currentPlayer);
        break;
      }
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleReset = () => {
    setCells(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner : ${winner}`;
    } else if (cells.every((cell) => cell !== '')) {
      return 'Draw!';
    } else {
      return `Next player: ${currentPlayer}`;
    }
  };

  const navigate = useNavigate();

  function toHome(){
    navigate('/')
  }
  return (
    <div className="tictac" style={{background:'#4B70F5' , height:'100vh' , overflow:'hidden'}}>
        <img src={home} alt="" className='tic-home' onClick={toHome} style={{width: '60px',
    height: '60px',
   position: 'absolute',
   top: '30px',
   left: '60px',
   }}/>
         <div className="title">
            <h1
            style={{
              textAlign: 'center',
              margin:' 40px',
              color: 'white' ,
              textShadow: '2px 2px 5px black',
              fontSize: '60px' ,
              letterSpacing: '3px',
              textTransform:' uppercase',
              fontWeight: '900',
            }}
            >Tic Tac Toe</h1>
        </div>
<div  style={{display:'flex' , justifyContent:'center'}}>
<div style={{display:'flex' , justifyContent:'center'}}>
        <div className="game">
      <div className="game-board">
        <Board cells={cells} onClick={handleClick} />
      </div>
      <div className="game-info" style={{
          textAlign:' center',
          margin: '20px',
      }}>
        <div className='winner'
        style={{
          color: 'white',
          textShadow: '2px 2px 5px black',
          marginBottom: '25px',
          fontSize: '30px',
          letterSpacing: '2px',
        }}
        >{renderStatus()}</div>
        <button className='tic-reset' onClick={handleReset}>Reset Game</button>
      </div>
    </div>
    </div>
</div>
    </div>
   
  );
};

export default TicTacToe;