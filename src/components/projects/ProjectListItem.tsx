import React, {useContext} from 'react'
import {Context} from "../../lib/context";
import {Project} from '../../lib/reducers/projects'
import {Link} from "react-router-dom";

interface ProjectItemProps {
    project: Project
}

export function ProjectListItem(props: ProjectItemProps) {
    const {project} = props
    const {dispatch} = useContext(Context);
    return (
        <li key={project.id}><Link to={"projects/" + project.id}>{project.name}</Link>
            <button aria-label={"remove-project-" + project.id} onClick={() => dispatch({
                type: 'remove',
                project: project
            })}>Remove
            </button>
        </li>
    )
}