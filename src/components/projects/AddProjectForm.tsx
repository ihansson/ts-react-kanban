import React, {useContext, useState} from 'react'
import {Context} from "../../lib/context";

export function AddProjectForm() {
    const {state, dispatch} = useContext(Context);
    const [addFormName, setAddFormName] = useState('')
    return (
        <form className="form-add-project" onSubmit={(e) => {
            e.preventDefault();
            dispatch({
                type: 'add',
                project: {
                    id: state.projects.nextProjectId,
                    name: addFormName,
                    columns: [],
                    nextColumnId: 3
                }
            })
            setAddFormName('')
        }}>
            <label>
                <span>Project Name</span>
                <input className="input form-add-project-name" aria-label="name-input" type="text" value={addFormName}
                       onChange={(e) => {
                           setAddFormName(e.target.value)
                       }}/>
            </label>
            <button className="button is-link">Submit</button>
        </form>
    )
}