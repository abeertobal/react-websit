import "./LogStyles.css"
import {React,useState} from 'react';

const Log = (props) => {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    const handleSubmit=(e) => {
      e.preventdefault();
    }
  return (
    <div className="first-log">
        
        <div className="log-right">
            <h1 className="log-right-header">WELCOM<span>E</span></h1>
            <div className="log-log">
                <div className="log-log-tit">
                    <h2>Log in</h2>
                </div>
                <div className="log-log-contain">
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    
                    <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                    <button type="submit"><a href="/">Log in</a></button>
                    <div className="log-log-sign">
                        <p className="hom-log-p">New here? <a href="/signup" onClick={()=>props.onSubmit("signup")} className="log-log-a">Sign up</a>
                        </p>
                    </div>
                </div>    
            </div>
        </div>
        <div className="log-left">
            <img src={require("../images/rowan-heuvel-sAB4BWrQ4Y4-unsplash 1.png")} alt="" />
        </div>
    </div>

    )

  }
  export default Log;