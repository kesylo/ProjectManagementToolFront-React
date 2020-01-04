import axios from "axios";
import {GET_ERRORS, GET_PROJECT, GET_PROJECTS, DELETE_PROJECT} from "./types";

/* this file run the API requests to the DB */

export const createProject = (project, history) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:8080/api/project", project);
        /* redirect to dashboard */
        history.push("/dashboard");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    } catch (err) {
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
};

export const getProjects = () => async dispatch => {
    const response = await axios.get("http://localhost:8080/api/project/all");
    dispatch({
        type:GET_PROJECTS,
        payload:response.data
    });
};

export const getProject = (id, history) => async dispatch => {

    try {
        const response = await axios.get( `http://localhost:8080/api/project/${id}`);
        dispatch({
            type:GET_PROJECT,
            payload:response.data
        });

    }catch (e) {
        history.push("/dashboard");
    }

};
