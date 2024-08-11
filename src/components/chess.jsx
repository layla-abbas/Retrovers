import "./chess.css";
import Board from "./Board/Board";
import { reducer } from "../reducer/reducer";
import { useReducer } from "react";
import { initGameState } from "../constants";
import AppContext from "./contexts/Context";
import Control from "./Control/Control";
import TakeBack from "./Control/bits/TakeBack";
import MovesList from "./Control/bits/MovesList";
import home from '../images/home4.png'
import { useNavigate } from "react-router-dom";
import './Game.css'

export default function Chess() {
  const [appState, dispatch] = useReducer(reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };

  const navigate = useNavigate();

  function toHome(){
    navigate('/')
  }
  return (
    <AppContext.Provider value={providerState}>
      <div className="chess">
      <img src={home} alt="" className='tic-home' onClick={toHome} style={{width: '60px',
    height: '60px',
   position: 'absolute',
   top: '30px',
   left: '60px',
   }}/>
        <Board />
        <Control>
          <MovesList />
          <TakeBack />
        </Control>
      </div>
    </AppContext.Provider>
  );
}
