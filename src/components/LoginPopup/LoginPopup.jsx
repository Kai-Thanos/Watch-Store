import React, { useState } from 'react'
import './LoginPopup.css'

const LoginPopup = ({setShowPopup}) => { //From App.jsx

    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <div className="log">
            <div className="login-frm">
                <p>{currState}</p>
                <p onClick={()=>{setShowPopup(false)}} className='exit'>X</p>
            </div>
            <form action="">
                {currState==="Login"?<></>:<input type="text" placeholder='Username'/>}
                <input type="text"  placeholder='Email'/>               
                <input type="text" placeholder='Password'/>
                <button>{currState==="Sign Up"?"Create account":"Login"}</button>
                <div className="check">
                  <input className='checkbox' type="checkbox" name="" id="" />
                  <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Login"
                    ?<p>Create a new account? <span onClick={()=>{setCurrState("Sign Up")}}> Click here</span></p>
                    :<p>Already have an account? <span onClick={()=>{setCurrState("Login")}}> Login here</span></p>
                }
            </form>
            
        </div>
        
    </div>
  )
}

export default LoginPopup

