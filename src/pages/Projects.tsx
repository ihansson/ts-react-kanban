import React from 'react'
import {AddProjectForm} from "../components/projects/AddProjectForm";
import {ProjectList} from "../components/projects/ProjectList";

export default function Projects() {
    return (<div>
        <h2 className="is-size-4">Your Projects</h2>
        <ProjectList/>
        <h2 className="is-size-4">Add Project</h2>
        <AddProjectForm/>
    </div>)
}