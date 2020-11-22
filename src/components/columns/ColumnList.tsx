import React from 'react'
import {Column, Project} from '../../lib/reducers/projects'
import {ColumnListItem} from "./ColumnListItem";

interface ColumnListProps {
    columns: Array<Column>
    project: Project
}

export function ColumnList(props: ColumnListProps) {
    const {columns, project} = props
    return (<div>
        {columns.length > 0 &&
        <ul className="project-list">
            {columns.map((column: Column) => (
                <ColumnListItem key={column.id} column={column} project={project}/>
            ))}
        </ul>
        }
        {columns.length === 0 &&
        <h2>No Columns Found</h2>
        }
    </div>)
}