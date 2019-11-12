import React from 'react';
import './App.css';
import Dashboard from "./components/Dashboard";
import NavBar from "./components/Layout/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <Router>
              <div className="App">
                  <NavBar/>
                  <Route exact path="/dashboard" component={Dashboard}/>
                  <Route exact path="/addProject" component={AddProject}/>
              </div>
          </Router>
      </Provider>
  );
}

export default App;
