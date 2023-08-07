import "./SendStyles.css"

const Send = () => {
  return (
    
    <div className="first-send">

        <div className="send-left">
            <div className="send-left-header">
                Send message
            </div>
            <img src={require("../images/send-message.png")} alt="SendMessage" />
        </div>
        
        <div className="send-right">
            
            <div className="send-cont">
                <div className="send-cont-contain">
                    <input type="text" placeholder='Full name' className="send-filed" required />
                    <input type="email" placeholder='Email' className="send-filed" required />
                    <input type="text" placeholder='Subject' className="send-filed"  required />
                    <textarea name="subject" cols="30" rows="10" placeholder="Details" className="send-details"></textarea>
                    <button type="submit"><a href="/">Submit </a></button>
                </div>    
            </div>
        </div>
        
    </div>
  )
}

export default Send;



