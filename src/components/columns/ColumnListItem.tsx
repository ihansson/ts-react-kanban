import React, {useContext} from 'react'
import {Column, ColumnAction, Project} from '../../lib/reducers/projects'
import {Context} from "../../lib/context";

interface ColumnListItemProps {
    project: Project
    column: Column
}

export function ColumnListItem(props: ColumnListItemProps) {
    const {column, project} = props
    const {dispatch} = useContext(Context);
    return (
        <li key={column.id}>{column.name}

            <button aria-label={"remove-column-" + column.id} onClick={() => dispatch({
                type: 'remove_column',
                project: project,
                column: column
            } as ColumnAction)}>Remove
            </button>
        </li>
    )
}