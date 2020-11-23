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
        <li className="column" key={column.id}>
            <div className="card-content has-background-white">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h3 className="is-size-4">{column.name}</h3>
                    </div>
                    <div className="column has-text-right">
                        <button className="button" aria-label={"move-column-left-" + column.id}
                                onClick={() => dispatch({
                                    type: 'move_column_left',
                                    project: project,
                                    column: column
                                } as ColumnAction)}><span className="icon">
                              <i className="fas fa-arrow-left" />
                            </span>
                        </button>
                        <button className="button ml-2 mr-2" aria-label={"move-column-right-" + column.id}
                                onClick={() => dispatch({
                                    type: 'move_column_right',
                                    project: project,
                                    column: column
                                } as ColumnAction)}><span className="icon">
                              <i className="fas fa-arrow-right" />
                            </span>
                        </button>
                        <button className="button is-danger" aria-label={"remove-column-" + column.id}
                                onClick={() => dispatch({
                                    type: 'remove_column',
                                    project: project,
                                    column: column
                                } as ColumnAction)}><span className="icon">
                              <i className="fas fa-times" />
                            </span>
                        </button>
                    </div>
                </div>
                {notes &&
                <NoteList notes={notes} project={project} column={column}/>
                }
                {notes.length === 0 &&
                <div className="is-size-5 mt-4">No Notes Found</div>
                }
                <h3 className="is-size-5 mt-6">Add Note</h3>
                <AddNoteForm project={project} column={column}/>
            </div>
        </li>
    )
}