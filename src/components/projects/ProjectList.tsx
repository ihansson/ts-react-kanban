import React, {useContext} from 'react'
import {Context} from "../../lib/context";
import {Project} from '../../lib/projects'
import ProjectListItem from "./ProjectListItem";

export default function ProjectList() {
    const {state} = useContext(Context);

    return (<div>
        {state.projects.projectList &&
        <ul className="project-list">
            {state.projects.projectList.map((project: Project) => (
                <ProjectListItem key={project.id} project={project}/>
            ))}
        </ul>
        }
        {state.projects.projectList.length === 0 &&
        <h2>No Projects Found</h2>
        }
    </div>)
}