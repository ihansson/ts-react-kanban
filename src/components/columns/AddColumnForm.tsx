import React, {useContext, useState} from 'react'
import {Context} from "../../lib/context";
import {ColumnAction, Project} from "../../lib/reducers/projects";

interface AddColumnFormProps {
    project: Project
}

export function AddColumnForm(props: AddColumnFormProps) {
    const {dispatch} = useContext(Context);
    const {project} = props
    const [addColumnName, setAddColumnName] = useState('')
    return (
        <div className="columns mt-3">
            <div className="column is-one-third">
                <form className="card" onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({
                        type: 'add_column',
                        project: project,
                        column: {
                            id: project.nextColumnId,
                            order: project.columns.length + 1,
                            name: addColumnName
                        }
                    } as ColumnAction)
                    setAddColumnName('')
                }}>
                    <div className="card-content">
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label" htmlFor="form-add-column-name">Name</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <input className="input form-add-column-name" name="form-add-column-name"
                                           aria-label="column-name-input" type="text" value={addColumnName}
                                           onChange={(e) => {
                                               setAddColumnName(e.target.value)
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