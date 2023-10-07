import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRef } from 'react'
import { auth } from './FirebaseConfig'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const navigate=useNavigate();
  const emailInputRef=useRef();
  const passwordInputRef=useRef();


const submitHandler=(event)=>{
event.preventDefault();
const enteredEmail=emailInputRef.current.value;
const enteredPassword=passwordInputRef.current.value;
signInWithEmailAndPassword(auth,enteredEmail,enteredPassword).then((res)=>{
navigate('/Profile');
console.log("Login Data"+res);
}).catch((error)=>{
  alert(error.message);
})
}
  return (
    // 
    <form className='form' onSubmit={submitHandler}>
<Link to='/Signup' className='Link'>GO BACK TO SIGNUP PAGE</Link>
        <h4>LOGIN HERE...</h4>
        <div className="form-group">
        <label htmlFor="email" >Email</label>
        </div>
            <div className="form-group">

    <input type="text" placeholder='Enter Your Mail Id' ref={emailInputRef}/>
    <small id="emailHelp" className="form-text text-muted">never share your email with anyone else.</small>
            </div>
       
    <div className="form-group">
    <label htmlFor="email">Password</label>
    </div>
    <div className="form-group">

    <input type="text" placeholder='Enter Your Password' ref={passwordInputRef}/>
    </div>
    
    <div className="form-group">
    <button className='submitbutton'>Submit</button>
   
    </div>
  </form>
  )
}

export default LoginPage
