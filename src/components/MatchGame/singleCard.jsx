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
                            <img className='front' src={card.src} alt="card front" 
                            style={{
                              width:'170px',
                              height:'170px'
                            }} />
                            <img className='cover'
                                style={{
                                  width:'170px',
                                  height:'170px'
                                }}
                             onClick={handleClick} src={cover} alt="card cover" />
                        </div>
                    </div>
  )
}