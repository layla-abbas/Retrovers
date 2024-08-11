import line1 from '../images/line1.png'
import circle from '../images/circle.png'
import insidecircle from '../images/insidecircle.png'
import left from '../images/left.png'
import right from '../images/right.png'
import heart from '../Slide Heart.json'
import threeheart from '../Three Heart.json'
import pacman from '../pac man22.json'
import tictactoe from '../images/tictactoe.png'
import line2 from '../images/line2.png'
import match from '../images/match.png'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Lottie from "lottie-react";
import boomImg from "../images/boom.png"
import hangman from '../images/hangman.png'
import chess from '../images/chess.png'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import cat from '../cat.json'
import sarokhpic2 from '../sarokhpic2.json'
import earth from '../earthpic3.json'
import loading from '../loading.json'
import line3 from '../images/line3.png'
import world from '../world.json'
import line4 from '../images/line4.png'
import line5 from '../images/line5.png'

export default function Home(){

    const navigate = useNavigate()

    function Subscribe(){
        navigate('/Subscribe')
    }

    function tictactoeGame(){
        navigate('./TicTacToe')
    }

    function matchGame(){
        navigate('./Match')
    }

    function boomGame(){
        navigate('./Boom')
    }
    function hangmanGame(){
        navigate('./Hangman')
    }
    function chessGame(){
        navigate('./Chess')
    }
    return (
        <div id="Home">
            <div className="header-container">
                <div className="nav">
                    <ul>
                        <li onClick={Subscribe}>SUBSCRIBE</li>
                        </ul>
                </div>
<div className="content">
    <h1>Retroverse</h1>
    <p>Enjoy Playing Retro Games In Our Website</p>
</div>
       
<div className="images">
        <img src={left} alt="" className='left' />
        <img src={right} alt="" className='right' />
<Lottie animationData={threeheart} className='threeheart'/>
       <Lottie animationData={heart} className='heart'/>
      </div>
      <div className="space">
<Lottie animationData={pacman} className='pacman'/>

      </div>
            </div>


      <div className="cards-container">
      <img src={line1} alt="" className='line1'/>
      <div className="cardcontent">

    <h2>THIS IS OUR GAMES</h2>
    <p>I Hope You Having Fun When You Play It</p>

</div>

<div className="cardsFcontainer">
    <div className="card one">
    <img src={chess} alt="" className='chesscard'/>
        <button onClick={chessGame}>Chess</button>
    </div>
    <div className="card two">
        <img src={match} alt="" className='match'/>
        <button onClick={matchGame}>Image Match</button>
    </div>
    <div className="card three">
    <img src={tictactoe} alt="" className='tictactoe'/>
    <button onClick={tictactoeGame}>Tic Tac Toe</button>
    </div>
   
</div>
<div className='cardsScontainer'>
<div className="card four">
<img src={boomImg} alt="" className='minesweeper'/>
<button onClick={boomGame}>Minesweeper</button>
</div>
<div className="card five">
<img src={hangman} alt="" className='hangman'/>
<button onClick={hangmanGame}>HangMan</button>
</div>
</div>
<img src={circle} alt="" className='circle'/>
<img src={insidecircle} alt="" className='insidecircle'/>
<img src={line2} alt="" className='line2'/>
      </div>

<div className="section-container">
<div className="section sec-one">
<h3>To Be A MeMber Of Our Family You :</h3>
<div className="pic1 pic">
<Lottie animationData={cat} className='pic1ani'/>
<div className='pi'>
   <img src={pic1} alt="" />
   <h4>You Should Click The Subscribe Button</h4>
   </div>
</div>
<div className="pic2 pic">
<Lottie animationData={sarokhpic2} className='sarokhpic2' />
<div className='pi'>
<h4>And then click on Sign Up</h4>
<img src={pic2} alt="" />
</div>
</div>
<div className="pic3 pic">
    <Lottie animationData={earth} className='earth' />
<div className='pi'>
<img src={pic3} alt="" />
<h4>Enter Your Ur User Name , Email , Password </h4>
</div>
</div>
<div className='loading-container'>
<Lottie animationData={loading} className='loading' />
</div>
<img src={line3} alt="" />
</div>
<div className="sec-two">
    <div>
    <h4>Our Future Goals :</h4>
    <p> We Aim To Revive Old Games In A New And Fun Way .</p>
    </div>
<Lottie animationData={world} className='world' />
</div>
<div className="space2">
<Lottie animationData={pacman} className='pacman2'/>
</div>
<div className="sec-three">
<img src={line4} alt="" />
<div>
    <h4>Layla.abbas01@gmail.com</h4>
    <h5>This Is My Email If You Have Any Idea You Want To Share With Me</h5>
</div>
<img src={line5} alt="" />
</div>
<div className="footer">
    <h5>*2024 Layla Abbas Nayef</h5>
</div>
</div>
   </div>
    )
}