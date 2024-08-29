import { useState } from 'react';
import '../Game.css';
import img0 from "../../images/img0.png"
import img1 from "../../images/img1.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import img5 from "../../images/img5.png"
import img6 from "../../images/img6.png"
import home from "../../images/home3.png"
import { randomWord } from "./Words";
import { useNavigate } from 'react-router-dom';


const FxHangman = () => {
    const {maxWrong, images} = FxHangman.defaultProps
    const [nWrong, setNWrong] = useState(0)
    const [guessed, setGuessed] = useState(new Set())
    const [group, setGroup] = useState('colors')
    const [answer, setAnswer] = useState(randomWord())

    const reset = () => { 
        setNWrong(0)
        setGuessed(new Set())
        setAnswer(randomWord())
        setGroup('colors')
    }

    const guessedWord = () => {
        return answer
          .split("")
          .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }

    const handleGuess = (e) => {
        let ltr = e.target.value
        const updatedSet = new Set([...guessed, ltr])
        setGuessed(updatedSet)
        setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    }

    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={guessed.has(ltr)}>
                {ltr}
            </button>
        ))
    }

    const handleChange = (e) => { 
        const {value} = e.target;
        setGroup(value)
        setAnswer(randomWord(value))
        setNWrong(0)
        setGuessed(new Set())
    }


    let alt = `${nWrong}/${maxWrong} guesses`;
    let isWinner = guessedWord().join("") === answer;
    let gameOver = nWrong >= maxWrong
    let gameState = generateButtons();
    if(isWinner) gameState = "You Won!";
    if(gameOver) gameState = "You Lost!";

let navigate = useNavigate();

    function toHome(){
        navigate('/')
      }

  return (
    <div className="Hangman" style={{background:'#7B66FF' , height:'100vh'}}>

         <img src={home} alt="" className='tic-home' onClick={toHome} style={{width: '60px',
    height: '60px',
   position: 'absolute',
   top: '30px',
   left: '60px',
   }}/>

        <h1 className="Hangman-title"><ff>H</ff><mm>a</mm><tt>n</tt><gg>g</gg><mm>m</mm><ff>a</ff><ss>n</ss> <group>{group}</group></h1>
        
        <div className="Hangman-container">
            <div className="Hangman-Gussed-sec">
            <img src={images[nWrong]} alt={alt} />
            <p className='Guessed'>Guessed Wrong: {nWrong}</p>
            </div>
            <div className="Hangman-key-sec">
            <p className="Hangman-word">
                    {gameOver ? answer : guessedWord()}
                </p>
                <div className="Hangman-btns">{gameState}</div>

                <button id='reset' value="colors" onClick={reset}>Restart?</button>
                 
                <form style={{marginTop:"50px" ,}}>
                    <label className='Guess' htmlFor="group">Guess About: </label>
                    <select style={{  color:"black" , textShadow:"2px 2px 5px white" }} name="group" id="group" value={group} onChange={handleChange}>
                        <option className='hangcolor' value="colors">Colors</option>
                        <option className='hangcolor' value="countries">Countries</option>
                        <option className='hangcolor' value="animals">Animals</option>
                    </select>
                </form>
            </div>
        </div>
        </div>

  )
}

FxHangman.defaultProps = {
    maxWrong: 6,
    images: [img0,img1,img2,img3,img4,img5,img6]
}

export default FxHangman