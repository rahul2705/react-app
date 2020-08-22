import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CreateStudent from "./CreateStudent/CreateStudent";
import UpdateStudent from "./UpdateStudent/UpdateStudent";
import DeleteStudent from "./DeleteStudent/DeleteStudent";
import Header from "./Header/Header";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/create" component={CreateStudent}/>
                        <Route exact path="/update" component={UpdateStudent}/>
                        <Route path="/delete" component={DeleteStudent}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;
