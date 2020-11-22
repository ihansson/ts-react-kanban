import React, {useContext, useState} from 'react'
import {Context} from "../../lib/context";
import {Column, Project} from "../../lib/reducers/projects";
import {NoteAction} from "../../lib/reducers/notes";

interface AddNoteFormProps {
    project: Project,
    column: Column;
}

export function AddNoteForm(props: AddNoteFormProps) {
    const {state, dispatch} = useContext(Context);
    const {project, column} = props
    const [addNoteContent, setAddNoteContent] = useState('')
    return (
        <form className="note" onSubmit={(e) => {
            e.preventDefault();
            dispatch({
                type: 'add_note',
                note: {
                    id: state.notes.nextNoteId,
                    project: project.id,
                    column: column.id,
                    content: addNoteContent
                }
            } as NoteAction)
            setAddNoteContent('')
        }}>
            <label>
                <span>Note Text</span>
                <input className="form-add-note-content" aria-label="note-content-input" type="text" value={addNoteContent}
                       onChange={(e) => {
                           setAddNoteContent(e.target.value)
                       }}/>
            </label>
            <button>Submit</button>
        </form>
    )
}