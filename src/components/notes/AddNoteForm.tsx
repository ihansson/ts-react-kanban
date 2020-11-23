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
        <form className="card form-add-note mt-4 mb-2" onSubmit={(e) => {
            e.preventDefault();
            dispatch({
                type: 'add_note',
                note: {
                    id: state.notes.nextNoteId,
                    project: project.id,
                    column: column.id,
                    content: addNoteContent,
                    index: state.notes.noteList.filter(obj => (obj.project === project.id && obj.column === column.id)).length + 1,
                }
            } as NoteAction)
            setAddNoteContent('')
        }}>
            <div className="card-content">
                <div className="field is-horizontal">
                    <div className="field-label is-normal">
                        <label className="label" htmlFor="form-add-note-content">Content</label>
                    </div>
                    <div className="field-body">
                        <div className="field">
                            <input className="input form-add-note-content" name="form-add-note-content"
                                   aria-label="note-content-input" type="text" value={addNoteContent}
                                   onChange={(e) => {
                                       setAddNoteContent(e.target.value)
                                   }}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="card-footer-item is-info button">Submit</button>
            </div>
        </form>
    )
}