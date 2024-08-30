import './Subscribe.css'
import joinUs from '../joinUs.json'
import Lottie from 'lottie-react'
import Sarokh from '../sarokh.json'
import gelaxy from '../gelaxy.json'
import Duck from '../duck.json'
import Yay from '../yay.json'
import { useNavigate } from 'react-router-dom'
import { useRef , useEffect , useState } from 'react'
import { faCheck , faTimes , faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp(){

const userRef = useRef();
const errRef = useRef();

const [user , setUser] = useState('');
const [vaildName , setVildName] = useState(false);
const [userFoucs , setUserFoucs] = useState(false);

const [pwd , setPwd] = useState('');
const [vaildPwd , setVildPwd] = useState(false);
const [pwdFoucs , setPwdFoucs] = useState(false);

const [matchPwd , setMatchPwd] = useState('');
const [vaildMatchPwd , setVildMatchPwd] = useState(false);
const [matchPwdFoucs , setMatchPwdFoucs] = useState(false);

const [errMsg , setErrMsg] = useState('');
const [success , setSuccess] = useState(false);

useEffect(()=>{
    useRef.current?.focus();
},[])

useEffect(()=>{
    const result = USER_REGEX.test(user)
    console.log(result)
    console.log(user)
    setVildName(result)
},[user])

useEffect(()=>{
    const result = PWD_REGEX.test(pwd)
    console.log(result)
    console.log(pwd)
    setVildPwd(result)
    const match = pwd === matchPwd
    setVildMatchPwd(match)
},[pwd , matchPwd])

useEffect(()=> {
    setErrMsg('');
} , [user , pwd , matchPwd])

    let navigate = useNavigate();

function toLogIn (){
    navigate('/LogIn')
}

function toHome (){
    navigate('/')
}

const handleSubmit = async (e) => {
e.preventDefault();

console.log(user , pwd )
setSuccess(true);
}


    return (
<>
{success ? (
  <div className="Logn-container">

<div className='Logn family'>
<Lottie animationData={Sarokh} className='Sarokh ' />
<Lottie animationData={gelaxy} className='gelaxy' />

<form className='form' onSubmit={handleSubmit}>
    <Lottie animationData={Yay} className='fixed h-auto w-1/2' style={{zIndex:'1'}}/>
                <div>
        <h2 className="join"  style={{zIndex:'6'}}>And Now U Are Part Of Our Family  !!</h2>

<div className='Logn'>
<button onClick={toHome} style={{zIndex:'6'}}>GO HOME</button>
</div>
</div>    
        </form>

</div>
<Lottie animationData={Duck} className='Duck' />
</div>
) : (
        <div className="Logn-container">
                    <Lottie animationData={joinUs} className='joinUs' />
        <h1 className="join">Join Us Now !!</h1>
        <Lottie animationData={joinUs} className='joinUs1' />
  <div className='Logn'>
        <Lottie animationData={Sarokh} className='Sarokh' />
        <Lottie animationData={gelaxy} className='gelaxy' />

        
 <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}
 aria-live='assertive'>
    {errMsg}
    </p> 

<form className='form' onSubmit={handleSubmit}>
                <div>

<div className='flex justify-center items-center'>
<input type="text"
id='username'
ref={userRef}
autoComplete='off'
onChange={(e) => setUser(e.target.value)}
required
aria-invalid={vaildName ? 'false' : 'true'}
aria-describedby='uidnote'
onFocus={() => setUserFoucs(true)}
onBlur={() => setUserFoucs(false)}
placeholder='Write Ur UserName .. '  />
<>
{userFoucs ? (
     <p >{vaildName ? (<FontAwesomeIcon icon={faCheck} />) : (   <FontAwesomeIcon icon={faTimes} />)}</p>
) : ''}
</>
</div>
<>
{userFoucs ? (
    <p  className='text-sm'>
 <FontAwesomeIcon icon={faInfoCircle} />
     4 To 24 Characters, Must Begin With A Letter<br/>
    </p>
) : ''}
</>


<div className='flex justify-center items-center'>
<input type="password"
onChange={(e) => setPwd(e.target.value)}
required
aria-invalid={vaildPwd ? 'false' : 'true'}
aria-describedby='pwdnote'
onFocus={() => setPwdFoucs(true)}
onBlur={() => setPwdFoucs(false)}
placeholder='Write Ur Pass .. '   />
<>
{pwdFoucs ? (
     <p className='inline'>{vaildPwd ? (<FontAwesomeIcon icon={faCheck} />) : ( <FontAwesomeIcon icon={faTimes} />)}</p>
) : ''}
</>
</div>
<>
{pwdFoucs ? (
    <p className='text-sm'>
           <FontAwesomeIcon icon={faInfoCircle} />
     8 To 24 Characters,Must Includes Upper&Lowercase & A Spical Character @!$#%. 
    </p>
) : ''}
</>

<div className='flex justify-center items-center'>
    
<input type="password" 
onChange={(e) => setMatchPwd(e.target.value)}
required
aria-invalid={vaildMatchPwd ? 'false' : 'true'}
aria-describedby='comfirmnote'
onFocus={() => setMatchPwdFoucs(true)}
onBlur={() => setMatchPwdFoucs(false)}
placeholder='Comfirt Ur Pass .. '   /> 
<>
{matchPwdFoucs ? (
     <p >{vaildMatchPwd ? (<FontAwesomeIcon icon={faCheck} />) : ( <FontAwesomeIcon icon={faTimes} />)}</p>
) : ''}
</>
</div>
<>
{matchPwdFoucs ? (
    <p className='text-sm'>
           <FontAwesomeIcon icon={faInfoCircle} />
    Must Match First Password Input Field .
    </p>
) : ''}
</>

<div className='Logn'>
<button onClick={toLogIn}>LOG IN</button>
<button className='log' disabled={!vaildName && !vaildPwd && !vaildMatchPwd ? true : false}
 type='submite'>SIGN UP</button>
</div>
</div>    
        </form>
        </div>
    <Lottie animationData={Duck} className='Duck' />
    </div>
   ) }</>
)
}