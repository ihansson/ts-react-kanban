import React, {useReducer} from 'react';

import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import Projects from './components/Projects'
import {Context, defaultState, reducer} from "./context";

function App() {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const value = {state, dispatch}
    return (
        <Context.Provider value={value}>
            <Router>
                <div>
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
        </Context.Provider>
    );
}

export default App;
