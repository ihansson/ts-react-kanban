import React from 'react';

import './App.sass';
import {Link, Route, Switch} from "react-router-dom";

import Projects from './pages/Projects';
import ProjectSingle from "./pages/ProjectSingle";

import {RootContext} from "./components/RootContext";

function App() {
    return (
        <RootContext>
            <section className="section">
                <div className="container">
                    <header>
                        <nav className="navbar is-primary">
                            <div className="navbar-brand">
                                <div className="navbar-item">
                                    <h1 className="is-size-3">React Kanban</h1>
                                </div>
                            </div>
                            <div className="navbar-menu">
                                <div className="navbar-start">
                                   <Link className="navbar-item" to="/">Projects</Link>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/projects/:id">
                            <ProjectSingle/>
                        </Route>
                        <Route path="/">
                            <Projects/>
                        </Route>
                    </Switch>
                </div>
            </section>
        </RootContext>
    );
}

export default App;
