import "./LandStyles.css"
import {FiMenu} from "react-icons/fi"
import {FaLongArrowAltRight} from "react-icons/fa"
import {FaLongArrowAltLeft} from "react-icons/fa"
import FacebookButton from "./FacebookButton"
import TwitterIconWithCircle from "./TwitterIconWithCircle"
import InstagramIcon from "./InstagramIcon"
import { FaPhoneAlt } from "react-icons/fa"
import {TbMailFilled} from "react-icons/tb"

       

const Land = () => {
    return(
        <div className="landing-container">

             {/* About Us */}

            <div className="about-left">
                <img src={require("../images/Rectangle.png")} alt="" />
                <div className="about-left-header">
                    About Us
                    <div className="about-right-textt">
                    <textarea name="subject" cols="30" rows="10" placeholder="A brief about the company" className="about-details"></textarea>
                    </div>
                </div>

            </div>



            {/* Our Services */}


            <div className="services-container">
            <div className="services-header">
                <FiMenu className="services-icon" />
                <div className="services-p">
                    <p>Our services </p>
                </div>
            </div>
            <div className="services-first">
                <div className="services-first1">
                    <div className="services-text-left">
                        <p className="services-text-pl">Airplane ticket</p>
                    </div>
                    <FaLongArrowAltRight className="services-icons" />
                    <div className="services-right-image">
                        <img src={require("../images/Rectangle 34.png")} alt="" />
                    </div>
                </div>
                <div className="services-first1">
                    <div className="services-left-image">
                        <img src={require("../images/Rectangle 35.png")} alt="" />
                    </div>
                    <FaLongArrowAltLeft className="services-icons" />
                    <div className="services-text-right">
                        <p className="services-text-pr">Hotel reservation</p>
                    </div>
                </div>
                <div className="services-first1">
                    <div className="services-text-left">
                        <p className="services-text-pl">Visa exportation</p>
                    </div>
                    <FaLongArrowAltRight className="services-icons" />
                    <div className="services-right-image">
                        <img src={require("../images/Rectangle 36.png")} alt="" />
                    </div>
                </div>
                <div className="services-first1">
                    <div className="services-left-image">
                        <img src={require("../images/Rectangle 37.png")} alt="" />
                    </div>
                    <FaLongArrowAltLeft className="services-icons" />
                    <div className="services-text-right">
                        <p className="services-text-pr2">Tourism trips</p>
                    </div>
                </div>
            </div>
        </div>


        {/*  FAQ'S  */}


        <div className="about-left">
            <img src={require("../images/Rectangle 26.png")} alt="" />
            <div className="about-left-header">
                <div className="question-head">
                    <div className="question-h1"><h1>Frequently</h1></div>
                    <div className="question-h2"><h1>Asked</h1></div>
                    <div className="question-h2"><h1>Questions</h1></div>
                </div>    
                <div className="about-right-text">
                    <p className="p">Question no1</p>
                    <p>Answer no1</p>
                    <p className="p">Question no2</p>
                    <p>Answer no2</p>
                    <p className="p">Question no3</p>
                    <p>Answer no3</p>
                    <p className="p">Question no4</p>
                    <p>Answer no4</p>
                    <p className="p">Question no5</p>
                    <p>Answer no5</p>
                </div>
                
            </div>
            
            
        </div>
        <div className="question-footer">
                <div className="question-icon1">
                    <div  className="question-icon-m">
                        <FacebookButton />
                        <TwitterIconWithCircle />
                        <InstagramIcon />
                    </div>
                    <div className="question-p">
                            <p className="p1">@username </p>
                    </div>
                    <div className="question-icon1">
                        <div className="question-icon-phone">
                            <FaPhoneAlt size={30} color= "#B88E58" />
                        </div> 
                        <div className="question-p">
                            <p>(225) 555-0118 </p>
                        </div>
                    </div>
                    <div className="question-icon1">
                        <div className="question-icon-phone">
                            <TbMailFilled size={30} color= "#B88E58" />
                        </div>
                        <div className="question-p">
                            <p>mail@example.com</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>


        

    )
}
export default Land;




