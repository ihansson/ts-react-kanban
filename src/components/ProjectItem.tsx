import React, {useContext} from 'react'
import {Context, Project} from "../context";

interface ProjectItemProps {
    project: Project
}

export default function ProjectItem(props: ProjectItemProps){
    const { project } = props
    const { dispatch } = useContext(Context);
    return (
        <li key={project.id}>{project.name}
            <button onClick={() => dispatch({
                type: 'remove',
                project: project
            })}>Remove
            </button>
        </li>
    )
}