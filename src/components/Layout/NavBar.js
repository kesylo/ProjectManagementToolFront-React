import React, {Component} from 'react';
import Logo from "../../ressources/images/logo.png";

class NavBar extends Component {
    render() {
        return (

            <div>


                <nav className="navbar navbar-expand-sm navbar-dark mb-4 shadow-lg bg-dark" style={{background: "#1C272B", height:"82px"}}>
                    <a className="navbar-brand" href="Dashboard.html">
                        <img src={Logo} style={{width:"100%"}} className="mr-3"/>

                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">
                                    Dashboard
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="register.html">
                                    Sign Up
                                </a>
                            </li>

                            <li className="nav-item">
                                <button className="button-glow ml-3">Login</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

export default NavBar;