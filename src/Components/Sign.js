import "./SignStyles.css"
import {React, useState} from "react"
import { AiOutlineUser } from "react-icons/ai";

const Sign = (props) => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[passowrd,setPassowrd] = useState("")
    const[number,setNumber] = useState("")
  
    const handleSubmit=(e)=> {
      e.preventdefault();
    }
  return (
    <div className="first-signup">

        <div className="signup-left">
            <img src={require("../images/signup.png")} alt="" />
            <div className="signup-left-header">
                WELCOME
            </div>
        </div>
        
        <div className="signup-right">
            <div className="circle">
                <AiOutlineUser className="icon" />
            </div>
            
            <div className="signup-cont">
                <div className="signup-cont-tit">
                    <h2>Sign up</h2>
                </div>
                <div className="signup-cont-contain">
                    <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} required />
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    <input type="password" placeholder='Password' value={passowrd} onChange={(e)=>setPassowrd(e.target.value)} required />
                    <input type="password" placeholder='Re-enter Password' required />
                    <input type="number" placeholder='Phone' value={number} onChange={(e)=>setNumber(e.target.value)} required />
                    <div className="signup-check">
                        <label htmlFor="" className="label">
                            <input type="checkbox" />
                            &nbsp;&nbsp;I agree to the terms.
                        </label>
                        
                    </div>
                    <button type="submit"><a href="/">Sign up</a></button>
                    <div className="signup-cont-sign">
                        <p className="signup-cont-p">Already have account? <a href="/" onClick={()=>props.onSubmit("Log")} className="signup-cont-a">Log in</a></p>
                    </div>
                </div>    
            </div>
        </div>
        
    </div>
  )
}

export default Sign;



