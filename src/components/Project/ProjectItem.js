import React, {Component} from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <div className="container" >
                <div className="card card-body mb-3 shadow p-3 bg-black rounded" style={{background:"#1C272B"}}>
                    <div className="row" >
                        <div className="col-2">
                            <span className="mx-auto">REACT</span>
                        </div>
                        <div className="col-lg-7 col-md-4 col-8">
                            <h3 className="project-title">Spring / React Project</h3>
                            <p>Project to create a Kanban Board with Spring Boot and React</p>
                        </div>
                        <div className="col-md-3 d-none d-lg-block">
                            <ul className="list-group">

                                <a href="ProjectForm.html" className="btn btn-outline-info mb-2">
                                    Project Board
                                </a>

                                <a href="ProjectForm.html" className="btn btn-outline-info mb-2">
                                    Update Project Info
                                </a>

                                <a href="ProjectForm.html" className="btn btn-outline-info">
                                    Delete Project
                                </a>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default ProjectItem;