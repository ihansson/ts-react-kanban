import React, {useContext, useState} from 'react'
import {Context} from "../../lib/context";
import {ColumnAction, Project} from "../../lib/reducers/projects";

interface AddColumnFormProps {
    project: Project
}

export function AddColumnForm(props: AddColumnFormProps) {
    const {dispatch} = useContext(Context);
    const [addColumnName, setAddColumnName] = useState('')
    return (
        <form className="form-add-project" onSubmit={(e) => {
            e.preventDefault();
            dispatch({
                type: 'add_column',
                project: props.project,
                column: {
                    id: props.project.nextColumnId,
                    name: addColumnName
                }
            } as ColumnAction)
            setAddColumnName('')
        }}>
            <label>
                <span>Column Name</span>
                <input className="form-add-column-name" aria-label="column-name-input" type="text" value={addColumnName} onChange={(e) => {
                    setAddColumnName(e.target.value)
                }}/>
            </label>
            <button>Submit</button>
        </form>
    )
}