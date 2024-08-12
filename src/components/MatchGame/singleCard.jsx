import '../Game.css';
import cover from '../../images/cover.png';

export default function Singlecard({ card , handleChoice , flipped , disabeld}) {

    const handleClick =()=> {
       if (!disabeld){
        handleChoice(card)
       }
       else {
        
       }
    }
  return (
                            <div className='match-card' >
                        <div className={flipped ? 'match-flipped' : ''}>
                            <img className='match-front' src={card.src} alt="card front"  />
                            <img className='match-cover'
                             onClick={handleClick} src={cover} alt="card cover" />
                        </div>
                    </div>
  )
}