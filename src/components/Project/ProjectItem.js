import React, {Component} from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from  "react-redux";
import {deleteProject} from "../../actions/projectActions";

class ProjectItem extends Component {

    onDeleteClick = id => {
        this.props.deleteProject(id);
    };
    render() {
        /* Extract data from parent component: dashboard */
        const {project} = this.props;
        return (
            <div className="container" >
                <div className="card card-body mb-3 shadow p-3 bg-black rounded" style={{background:"#1C272B"}}>
                    <div className="row" >
                        <div className="col-2">
                            <span className="mx-auto">{project.projectIdentifier}</span>
                        </div>
                        <div className="col-lg-7 col-md-4 col-8">
                            <h3 className="project-title">{project.projectName}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="col-md-3 d-none d-lg-block">
                            <ul className="list-group">

                                <a href="" className="btn btn-outline-info mb-2">
                                    Project Board
                                </a>

                                {/* pass id to route */}
                                <Link to={`/updateProject/${project.projectIdentifier}`} className="btn btn-outline-info mb-2">
                                    Update Project Info
                                </Link>

                                <a href="" className="btn btn-outline-info" onClick={this.onDeleteClick.bind(this, project.projectIdentifier)}>
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

ProjectItem.protoTypes={
    deleteProject: PropTypes.func.isRequired
};

export default connect(null, {deleteProject})(ProjectItem);