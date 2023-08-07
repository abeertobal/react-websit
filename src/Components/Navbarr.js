import { Component } from "react";
import "./NavbarrStyles.css";
import {MenuuItems} from "./MenuuItems"
import { Link } from "react-router-dom";

class Navbarr extends Component{
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className="NavbarrItemes">
                <div className="nav-item">
                    <h1 className="navbarr-logo">Logo here</h1>
                </div>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i 
                    className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}>
                    </i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url} 
                                // navLinkStyles ={ ({ isActive}) => {
                                //     return {
                                //          color: isActive ? "red" : "black" 
                                //      }
                                //  }}
                                >
                                {item.title}
                                </Link>
                            </li>
                        );
                    })}
                 
                </ul>
            </nav>
        )
    }

}

export default Navbarr;












