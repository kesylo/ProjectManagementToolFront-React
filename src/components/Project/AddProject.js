import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";

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
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors){
            this.setState({errors: nextProps.errors});
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
                                           className="form-control form-control-lg"
                                           placeholder="Project Name"
                                           name="projectName"
                                           value={this.state.projectName}
                                           onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                           className="form-control form-control-lg"
                                           placeholder="Unique Project ID"
                                           name="projectIdentifier"
                                           value={this.state.projectIdentifier}
                                           onChange={this.onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea className="form-control form-control-lg"
                                              placeholder="Project Description"
                                              name="description"
                                              value={this.state.description}
                                              onChange={this.onChange}
                                    />
                                </div>

                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="startDate"
                                           value={this.state.startDate}
                                           onChange={this.onChange}
                                    />
                                </div>

                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date"
                                           className="form-control form-control-lg"
                                           name="endDate"
                                           value={this.state.endDate}
                                           onChange={this.onChange}
                                    />
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