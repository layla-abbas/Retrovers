import { useEffect, useState } from 'react';
import '../Game.css';
import card1 from '../../images/1.png';
import card2 from '../../images/2.png';
import card3 from '../../images/3.png';
import card4 from '../../images/4.png';
import card5 from '../../images/5.png';
import card6 from '../../images/6.png';
import card7 from '../../images/7.png';
import card8 from '../../images/8.png';
import card9 from '../../images/9.png';
import card10 from '../../images/10.png';
import home from '../../images/home1.png'
import Singlecard from './singleCard';
import { useNavigate } from 'react-router-dom';


const cardImage = [
    {src : card1 , matched : false},
    {src : card2 , matched : false},
    {src : card3 , matched : false},
    {src : card4 , matched : false},
    {src : card5 , matched : false},
    {src : card6 , matched : false},
    {src : card7 , matched : false},
    {src : card8 , matched : false},
    {src : card9 , matched : false},
    {src : card10 , matched : false},
]


export default function Memory(){

    const [cards , setCards] = useState([]);

    const [turns,setTurns] = useState(0);
    const [choiceOne,setChoiceOne] = useState(null);
    const [choiceTwo,setChoiceTwo] = useState(null);
    const [disabeld , setDisabeld] = useState(false);

    const shuffleCards = () => {
   const shuffledCards = [...cardImage , ...cardImage]
   .sort(() => Math.random() - 0.5)
   .map((card) => ({ ...card , id: Math.random()}))

   setChoiceOne(null);
   setChoiceTwo(null);
   setCards(shuffledCards);
   setTurns(0);
    }

const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
}

useEffect(() => {
    
    if (choiceOne && choiceTwo) {
        setDisabeld(true);
        if (choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
                return prevCards.map(card => {
                    if(card.src === choiceOne.src){
                        return { ...card , matched: true}
                    }
                    else {
                        return card
                    }
                })
            })
            resetTurn()
        }
        else {
          
            setTimeout(() => resetTurn(), 500);
        }
    }

} , [choiceOne, choiceTwo])

useEffect(() =>{
    shuffleCards()
},[])

const resetTurn =() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
    setDisabeld(false);
}

const navigate = useNavigate();

function toHome(){
  navigate('/')
}
    return(
        <div className='match-container' 
        style={{
            height : '100vh' ,
            textAlign : 'center' , 
            overflow : 'hidden' ,
            backgroundColor : '#6528F7'
        }}
        >
              <img src={home} alt="" className='tic-home' onClick={toHome}/>
            <h1 style={{
                    letterSpacing: '3px',
                    margin: '15px',
                    fontSize: '40px',
                    fontWeight: '900',
                    color: 'white' ,
                    textShadow: '2px 2px 5px black',
            }}
            >IMAGE MATCH</h1>
            <button onClick={shuffleCards} className='match-Btn'>New Game</button>

<div className='match-card' 
style={{
     display: 'flex',
    justifyContent: 'center',
    }}>
            <div className="card-grid" style={{
                    marginTop: '10px',
                    display:' grid',
                    gridTemplateColumns:' 1fr 1fr 1fr 1fr 1fr',
                gap: '5px',
            }}>
                {cards.map(card => (
<Singlecard
handleChoice={handleChoice}
 key={card.id}
  card={card}
  flipped={card === choiceOne || card === choiceTwo || card.matched}
  disabeld={disabeld}
  />
                ))}
            </div>
            </div>
            <p
            style={{
                color: 'white',
                marginTop: '10px',
                fontSize: '25px',
            }}
            >Turns : {turns}</p>
        </div>
    )
}