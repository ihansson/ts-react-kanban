import React, {useContext} from 'react'
import {Column, ColumnAction, Project} from '../../lib/reducers/projects'
import {Context} from "../../lib/context";
import {NoteList} from "../notes/NoteList";
import {AddNoteForm} from "../notes/AddNoteForm";

interface ColumnListItemProps {
    project: Project
    column: Column
}

export function ColumnListItem(props: ColumnListItemProps) {
    const {column, project} = props
    const {state, dispatch} = useContext(Context);

    const notes = state.notes.noteList.filter(note => {
        return note.project === project.id && note.column === column.id
    })
    return (
        <li key={column.id}>{column.name} ({column.order})
            <button aria-label={"move-column-left-" + column.id} onClick={() => dispatch({
                type: 'move_column_left',
                project: project,
                column: column
            } as ColumnAction)}>Left
            </button>
            <button aria-label={"move-column-right-" + column.id} onClick={() => dispatch({
                type: 'move_column_right',
                project: project,
                column: column
            } as ColumnAction)}>Right
            </button>
            {notes &&
                <NoteList notes={notes} project={project} column={column} />
            }
            {notes.length === 0 &&
                <div>No Notes Found</div>
            }
            <AddNoteForm project={project} column={column} />
            <button aria-label={"remove-column-" + column.id} onClick={() => dispatch({
                type: 'remove_column',
                project: project,
                column: column
            } as ColumnAction)}>Remove
            </button>
        </li>
    )
}