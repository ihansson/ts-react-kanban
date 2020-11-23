import React, {useContext, useState} from 'react'
import {Context} from "../../lib/context";

export function AddProjectForm() {
    const {state, dispatch} = useContext(Context);
    const [addFormName, setAddFormName] = useState('')
    return (
        <div className="columns mt-3">
            <div className="column is-one-third">
                <form className="card form-add-project" onSubmit={(e) => {
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
                    <div className="card-content">
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label" htmlFor="form-add-project-name">Name</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <input className="input form-add-project-name" name="form-add-project-name"
                                           aria-label="name-input" type="text"
                                           value={addFormName}
                                           onChange={(e) => {
                                               setAddFormName(e.target.value)
                                           }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="card-footer-item button is-link">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}