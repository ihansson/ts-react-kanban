import React, {useContext} from 'react'
import {Context, Project} from "../context";
import ProjectItem from "./ProjectItem";
import AddProjectForm from "./AddProjectForm";

export default function Projects() {

    const {state} = useContext(Context);

    return (<div>
        {state.projectList &&
        <ul>
            {state.projectList.map((project: Project) => (
                <ProjectItem project={project} />
            ))}
        </ul>
        }
        <AddProjectForm />
    </div>)
}