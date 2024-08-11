import './Subscribe.css'
import joinUs from '../joinUs.json'
import Lottie from 'lottie-react'
import Sarokh from '../sarokh.json'
import gelaxy from '../gelaxy.json'
import Duck from '../duck.json'
import { useNavigate } from 'react-router-dom'
import { useRef , useState ,useEffect } from 'react'

export default function LogIn(){

    let navigate = useNavigate();



function toSignUp (){
    navigate('/SignUp')
}

function toHome (){
    navigate('/')
}

const userRef = useRef();
const errRef = useRef();

const [user , setUser] = useState('');
const [pass , setPass] = useState('');
const [errMsg , setErrMsg] = useState('');

const [sucss , setSucss] = useState(false);


useEffect(() => {
   setErrMsg('');
},[user , pass])

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pass)
setUser('')
setPass('');
setSucss(true);
}
    return (
    <div className="Logn-container">
    <Lottie animationData={joinUs} className='welcom' />
<h1 className="join">Wellcome Back !!</h1>
<Lottie animationData={joinUs} className='welcom1' />
<div className='Logn'>
<Lottie animationData={Sarokh} className='Sarokh' />
<Lottie animationData={gelaxy} className='gelaxy' />
<form className='form' onSubmit={handleSubmit}>
  <div>
<input type="text" placeholder='Write Ur UserName .. ' 
ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)}
value={user} required/>
<input type="password" placeholder='Write Ur Pass .. ' 
onChange={(e) => setPass(e.target.value)} value={pass} required/> 
<div className='Logn'>
<button className='log'  type='submite'>LOG IN</button>
<button onClick={toSignUp}>SIGN UP</button>
</div>
</div>    
</form>
</div>
<Lottie animationData={Duck} className='Duck' />
</div>
)
}