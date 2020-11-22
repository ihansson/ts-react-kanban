import React, {useContext} from 'react'
import {Context} from "../../lib/context";
import {Project} from '../../lib/reducers/projects'
import {ProjectListItem} from "./ProjectListItem";

export function ProjectList() {
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
        <h2 className="is-size-4">No Projects Found</h2>
        }
    </div>)
}