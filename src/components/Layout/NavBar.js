import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{background: "#1C272B", height:"82px"}}>
                <div className="container">
                    <a className="navbar-brand" href="Dashboard.html">
                        SPM Tool
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
                                <a href="ProjectForm.html" className="btn btn-info ml-3" style={{background:"#FF6C37"}}>
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default NavBar;