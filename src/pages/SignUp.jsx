import './Subscribe.css'
import joinUs from '../joinUs.json'
import Lottie from 'lottie-react'
import Sarokh from '../sarokh.json'
import gelaxy from '../gelaxy.json'
import Duck from '../duck.json'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function SignUp(){

    let navigate = useNavigate();

function toLogIn (){
    navigate('/LogIn')
}

function toHome (){
    navigate('/')
}


const [value , setValue ] = useState({
    name : '',
    email : '',
    password : ''

});

const handleInput = (event) => {
setValue(prev => ({...prev, [event.target.name]:[event.target.value]}))
}

    return (

        <div className="Logn-container">
                    <Lottie animationData={joinUs} className='joinUs' />
        <h1 className="join">Join Us Now !!</h1>
        <Lottie animationData={joinUs} className='joinUs1' />
    <div className='Logn'>
        <Lottie animationData={Sarokh} className='Sarokh' />
        <Lottie animationData={gelaxy} className='gelaxy' />
            <form className='form'>
                <div>
                <input type="text" placeholder='Write Ur UseName .. ' onChange={handleInput} />
<input type="email" placeholder='Write Ur Email .. ' onChange={handleInput}  />
<input type="password" placeholder='Write Ur Pass .. ' onChange={handleInput}  /> 
<div className='Logn'>
<button onClick={toLogIn}>LOG IN</button>
<button className='log' onClick={toHome} type='submite'>SIGN UP</button>
</div>
</div>    
        </form>
        </div>
    <Lottie animationData={Duck} className='Duck' />
    </div>
)
}