import React, {Component} from 'react';
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";

class Dashboard extends Component {
    render() {
        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 font-weight-bold text-center">Manage your projects</h1>
                            <br/>
                                {/*Add button component*/}
                                <CreateProjectButton/>
                            <br/>
                            <hr className="bg-white"/>
                            {/*project list component*/}
                            <ProjectItem/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;