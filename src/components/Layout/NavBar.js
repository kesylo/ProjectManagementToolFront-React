import React, {Component} from 'react';
import Logo from "../../ressources/images/logo.png";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (

            <div>


                <nav className="navbar navbar-expand-sm navbar-dark mb-4 shadow-lg bg-dark" style={{height:"72px"}}>

                    <Link to={"/"} className="navbar-brand">
                        <img src={Logo} style={{width:"100%"}} className="mr-3"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>

                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link " to="/register">
                                    Sign Up
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/login">
                                    <button className="button-glow ml-3">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;