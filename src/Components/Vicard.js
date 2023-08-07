import Visa from "../images/Visa icon.svg"
import Master from "../images/MasterCard icon.svg"

import "./VicardStyles.css"
import React, { useState } from "react";

const Vicard = () => {

    const [number, setNumber] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')

    return(
        <div className="first-card">
        

        <div className="card-left">
            <img src={require("../images/rowan-heuvel-3.png")} alt="" />
        </div>
        
        <div className="card-right">
            <h1 className="card-right-header">Payment Via Card</h1>
            <div className="card-cont">
                <div className="card-cont-number">
                    <input 
                        type="number" 
                        className="card-input"
                        placeholder='Card number'
                        value={number}
                        name="number"
                        onChange={e => setNumber(e.target.value)}
                        required />
                        <div className="card-logos">
                            <img src={Master} alt="" className="card-logo1" />
                            <img src={Visa} alt="" className="card-logo2" />
                        </div>
                        
                 </div>
                <div className="card-one-row">
                    <div className="card-expiry">
                        <input 
                            type="text" 
                            placeholder='Expiration date MM/YY'
                            value={expiry}
                            name="expiry"
                            onChange={e => setExpiry(e.target.value)}
                            required />
                    </div>
                    <div className="card-cvv">
                        <input 
                            type="tel" 
                            placeholder='CVV'
                            value={cvv}
                            name="cvv"
                            onChange={e => setCvv(e.target.value)}
                            required />                
                    </div>
                 </div>    
                 <button type="submit"><a href="../submit">Submit payment</a></button>
            </div>
            <div className="card-cont-card">
                <p className="card-cont-p">Or pay with 
                    <a href="/payment" className="card-cont-a"> Paytm & UPI</a>
                </p>
            </div>
        </div>
            
        
    </div>
    )
}
export default Vicard;





