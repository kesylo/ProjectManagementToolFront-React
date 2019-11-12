import React from "react";
import {Link} from "react-router-dom";

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/addProject" >
                <button className="button-glow-outline">
                    Add project
                    <i className="fa fa-plus ml-2"/>
                </button>
            </Link>
        </React.Fragment>
    );
};

export default CreateProjectButton;