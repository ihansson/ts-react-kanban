import React, {useContext} from 'react'
import {Context} from "../../lib/context";
import {Project} from '../../lib/projects'

interface ProjectItemProps {
    project: Project
}

export default function ProjectListItem(props: ProjectItemProps){
    const { project } = props
    const { dispatch } = useContext(Context);
    return (
        <li key={project.id}>{project.name}
            <button aria-label={"remove-project-"+project.id} onClick={() => dispatch({
                type: 'remove',
                project: project
            })}>Remove
            </button>
        </li>
    )
}