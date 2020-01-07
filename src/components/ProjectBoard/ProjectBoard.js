import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Backlog from "./Backlog";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getBacklog} from "../../actions/backlogActions";

class ProjectBoard extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getBacklog(id);
    }

    render() {
        const { id } = this.props.match.params;
        const { project_tasks } = this.props.backlog;

        return (
            <div className="container">

                <Link to= {`/addProjectTask/${id}`}>
                    <button className="button-glow-outline">
                        Create Project Task
                        <i className="fa fa-plus ml-2"/>
                    </button>
                </Link>

                <br />
                <hr />

                <Backlog project_tasks_prop={project_tasks} />
            </div>
        );
    }
}

ProjectBoard.propTypes = {
    backlog: PropTypes.object.isRequired,
    getBacklog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    backlog: state.backlog
});

export default connect(
    mapStateToProps,
    { getBacklog }
)(ProjectBoard);