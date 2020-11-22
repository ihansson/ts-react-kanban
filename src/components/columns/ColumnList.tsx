import React from 'react'
import {Column, Project} from '../../lib/reducers/projects'
import {ColumnListItem} from "./ColumnListItem";

interface ColumnListProps {
    columns: Array<Column>
    project: Project
}

export function ColumnList(props: ColumnListProps) {
    const {columns, project} = props
    const sortedColumns = columns.sort(function(a, b) {
        const x = a['order'];
        const y = b['order'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    return (<div>
        {columns.length > 0 &&
        <ul className="project-list">
            {sortedColumns.map((column: Column) => (
                <ColumnListItem key={column.id} column={column} project={project}/>
            ))}
        </ul>
        }
        {columns.length === 0 &&
        <h2>No Columns Found</h2>
        }
    </div>)
}