import React, {useContext} from "react";
import {Note, NoteAction} from "../../lib/reducers/notes";
import {Context} from "../../lib/context";
import {Column, Project} from "../../lib/reducers/projects";

interface NoteListItemProps {
    note: Note
    project: Project
    column: Column
}

export function NoteListItem(props: NoteListItemProps) {
    const {note, column} = props
    const {dispatch} = useContext(Context);

    return (<article key={note.id} className="message">
        <div className="message-body">
            <div className="columns is-vcentered">
                <div className="column">
                    {note.content}
                </div>
                <div className="column has-text-right">
                    <button className="button is-small" aria-label={"move-note-up-" + column.id} onClick={() => dispatch({
                        type: 'move_note_up',
                        note: note
                    } as NoteAction)}><span className="icon is-small">
                              <i className="fas fa-arrow-up" />
                            </span>
                    </button>
                    <button className="button is-small ml-2 mr-2" aria-label={"move-note-down-" + column.id}
                            onClick={() => dispatch({
                                type: 'move_note_down',
                                note: note
                            } as NoteAction)}><span className="icon is-small">
                              <i className="fas fa-arrow-down" />
                            </span>
                    </button>
                    <button className="button is-small is-danger" aria-label={"remove-note-" + note.id} onClick={() => dispatch({
                        type: 'remove_note',
                        note: note
                    } as NoteAction)}><span className="icon is-small">
                              <i className="fas fa-times" />
                            </span>
                    </button>
                </div>
            </div>
        </div>
    </article>);
}