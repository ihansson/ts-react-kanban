import React from 'react';

import './App.css';
import {Link, Route, Switch} from "react-router-dom";

import Projects from './pages/Projects';
import ProjectSingle from "./pages/ProjectSingle";

import {RootContext} from "./components/RootContext";

function App() {
    return (
        <RootContext>
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
                    <Route path="/projects/:id">
                        <ProjectSingle/>
                    </Route>
                    <Route path="/">
                        <Projects/>
                    </Route>
                </Switch>
            </div>
        </RootContext>
    );
}

export default App;
