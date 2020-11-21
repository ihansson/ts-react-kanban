import React, {useContext, useState} from 'react'
import {Context} from "../context";

export default function AddProjectForm() {
    const {state, dispatch} = useContext(Context);
    const [addFormName, setAddFormName] = useState('')
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch({
                type: 'add',
                project: {
                    id: state.nextProjectId,
                    name: addFormName
                }
            })
            setAddFormName('')
        }}>
            <input type="text" value={addFormName} onChange={(e) => {
                setAddFormName(e.target.value)
            }}/>
            <button>Submit</button>
        </form>
    )
}