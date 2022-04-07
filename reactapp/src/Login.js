import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [email ,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e=>{
    e.preventDefault()
  }
  return (
    <div classname ='login_ss'>
        
      <div className='login_container'>
            <h1>LOGIN</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type= 'password' value={password} onChange ={e=> setEmail(e.target.value)} />
                <button type='submit' onClick={signIn} className='login_signinbutton'>LOGIN</button>
            </form>
            <p className='login_new'>New to Bookstore?</p>
            <Link to='/signup'>
            <div  className='login_signup'>
              <span  >
                Click here
              </span>

            </div>
            </Link>
              

        
            
        
        </div>
        
    </div>
  )
}

export default Login