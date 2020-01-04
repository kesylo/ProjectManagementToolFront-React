import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";
import classNames from "classnames";

class AddProject extends Component {
    constructor(){
        super();
        /* We want the form to be empty when we want to create a new project so we set an initial state*/
        this.state={
            projectIdentifier: "",
            projectName: "",
            description: "",
            startDate: "",
            endDate: "",
            errors: {}
        };

        /* bind onChange method to all fields with a value tag. All methods created must be bind*/
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    /* Life cycle hook */
    static getDerivedStateFromProps(props){
        if (props != null){
            return {
                errors: props.errors
            }
        }
    }

    /* Set a new state to the fields */
    onChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            });
    }

    /* send for data to backend */
    onSubmit(e) {
        /* prevent the app from refreshing on submit*/
        e.preventDefault();
        /* crete project object */
        const newProject = {
            projectIdentifier: this.state.projectIdentifier,
            projectName: this.state.projectName,
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };
        /* send to backend */
        this.props.createProject(newProject, this.props.history);
    }

    render() {
        /* extract errors from our state */
        const {errors} = this.state;
        /* All the 'name' attributes in every html field should match the ones on the API model class*/
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 m-auto">
                            <h1 className="display-4 font-weight-bold text-center">Create a project</h1>
                            <hr/>
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <input type="text"
                                           className={classNames("form-control form-control-lg", {"is-invalid": errors.projectName})}
                                           placeholder="Project Name"
                                           name="projectName"
                                           value={this.state.projectName}
                                           onChange={this.onChange}
                                    />
                                    {/* Show error message if there is an error with the project name*/}
                                    {errors.projectName && (
                                        <div className="invalid-feedback">
                                            {errors.projectName}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           className={classNames("form-control form-control-lg", {"is-invalid": errors.projectIdentifier})}
                                           placeholder="Unique Project ID"
                                           name="projectIdentifier"
                                           value={this.state.projectIdentifier}
                                           onChange={this.onChange}
                                    />
                                    {errors.projectIdentifier && (
                                        <div className="invalid-feedback">
                                            {errors.projectIdentifier}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <textarea className={classNames("form-control form-control-lg", {"is-invalid": errors.description})}
                                              placeholder="Project Description"
                                              name="description"
                                              value={this.state.description}
                                              onChange={this.onChange}
                                    />
                                    {errors.description && (
                                        <div className="invalid-feedback">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>

                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className={classNames("form-control form-control-lg", {"is-invalid": errors.startDate})}
                                           name="startDate"
                                           value={this.state.startDate}
                                           onChange={this.onChange}
                                           required
                                    />
                                    {errors.startDate && (
                                        <div className="invalid-feedback">
                                            {errors.startDate}
                                        </div>
                                    )}
                                </div>

                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className={classNames("form-control form-control-lg", {"is-invalid": errors.endDate})}
                                           name="endDate"
                                           value={this.state.endDate}
                                           onChange={this.onChange}
                                           required
                                    />
                                    {errors.endDate && (
                                        <div className="invalid-feedback">
                                            {errors.endDate}
                                        </div>
                                    )}
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AddProject.propTypes = {
    createProject : PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const  mapStateToProps = state => ({
    /* get errors sent from the server and map them to our prop */
    errors: state.errors
});

export default connect(mapStateToProps, {createProject}) (AddProject);