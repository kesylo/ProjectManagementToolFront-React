import React, {Component} from 'react';
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import {getProjects} from "../actions/projectActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
    /* what happens when we render this component (life cycle hook) */
    componentDidMount() {
        this.props.getProjects();
    }

    render() {
        /* Pass data to child component: projectItem*/
        const {projects} = this.props.project;

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
                            {/*project list component. pass props to the component*/}
                                {projects.map(project=>(
                                    <ProjectItem key={project.id} project={project}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state=>({
    project: state.project,
});

export default connect(mapStateToProps, {getProjects})(Dashboard);