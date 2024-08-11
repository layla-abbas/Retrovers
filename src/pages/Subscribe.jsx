import './Subscribe.css'
import Lottie from 'lottie-react'
import Sarokh from '../sarokh.json'
import gelaxy from '../gelaxy.json'
import Duck from '../duck.json'

import { useNavigate } from 'react-router-dom'

export default function Subscribe(){

let navigate = useNavigate();

function toLogIn (){
    navigate('/LogIn')
}

function toSignUp (){
    navigate('/SignUp')
}


return (
    <div className="sub-container">
    <div className='sub'>
        <Lottie animationData={Sarokh} className='Sarokh' />
        <Lottie animationData={gelaxy} className='gelaxy' />
        <form className='form'>
<div>

<button onClick={toLogIn}>LOG IN</button>

<button onClick={toSignUp}>SIGN UP</button>
</div>
        </form>
    </div>
    <Lottie animationData={Duck} className='Duck' />
    </div>
)
}