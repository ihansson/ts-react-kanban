import React, {useContext} from 'react'
import {Context} from "../lib/context";
import {useParams} from 'react-router-dom'
import {ColumnList} from "../components/columns/ColumnList";
import {AddColumnForm} from "../components/columns/AddColumnForm";

interface ProjectSingleParams {
    id: string
}

export default function Project(props: ProjectSingleParams | {}) {
    const params: ProjectSingleParams | {} = useParams()
    let id;
    if ("id" in props) {
        id = parseInt(props.id)
    } else if ("id" in params) {
        id = parseInt(params.id)
    }

    const {state} = useContext(Context);
    const project = state.projects.projectList.filter(project => project.id === id)[0]

    if (!project) return <div className="is-size-4">Project Not Found</div>

    return (<div>
        <h2 className="is-size-4">{project.name}</h2>
        <ColumnList columns={project.columns} project={project}/>
        <AddColumnForm project={project}/>
    </div>)
}