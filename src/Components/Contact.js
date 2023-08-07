import "./ContactStyles.css"
import {BsFillTelephoneFill} from "react-icons/bs"
import {HiLocationMarker} from "react-icons/hi"
import {TbMailFilled} from "react-icons/tb"
import InstagramIcons from "./InstagramIcons"


const Contact = () => {
  return (
    <div className="first-contact">

        <div className="contact-left">
            <img src={require("../images/rowan-heuvel2.png")} alt="" />
        </div>
        
        <div className="contact-right">
            <div className="contact-infor">
                <div className="contact-log-tit">
                    <h2>Contact us</h2>
                </div>
                <div className="contact-info">
                    <div className="contact-info1">
                        <BsFillTelephoneFill className="contact-info-icon" />
                        <div className="contact-info-p">
                            <p>(225) 555-0118 </p>
                            <p>(808) 555-0111</p>
                        </div>
                    </div>
                    <div className="contact-info1">
                        <HiLocationMarker className="contact-info-icon" />
                        <div className="contact-info-p">
                            <p>2715 Ash Dr. San Jose, South Dakota 83475 </p>
                        </div>
                    </div>
                    <div className="contact-info1">
                        <a href="/send"><TbMailFilled className="contact-info-icon" /></a>
                        <div className="contact-info-p">
                            <p className="contact-info-p1">curtis.weaver@example.com </p>
                            <p>jackson.graham@example.com</p>
                        </div>
                    </div>
                    <div className="contact-info1">
                        <InstagramIcons />
                        <div className="contact-info-p">
                            <p>&nbsp;@username </p>
                        </div>
                    </div>
                    
                </div>    
            </div>
        </div>
        
    </div>
  );
}

export default Contact;


