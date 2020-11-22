import React from 'react';

import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Projects from './pages/Projects';

import {RootContext} from "./components/RootContext";

function App() {
    return (
        <RootContext>
            <Router>
                <div>

                    <h1>React Kanban</h1>

                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Projects</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/">
                            <Projects/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </RootContext>
    );
}

export default App;
