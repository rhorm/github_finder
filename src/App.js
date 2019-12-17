import React, {Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound'
import User from './components/User';
import Alert from "./components/Alert";
import About from "./components/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import './App.css';

function App() {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className='App'>
                        <Navbar/>
                        <div className='container'>
                            <Alert/>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                <Route exact path='/about' component={About}/>
                                <Route exact path='/user/:login' component={User}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
}

export default App;
