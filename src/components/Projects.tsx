import React, {useContext, useState} from 'react'
import {Context, Project} from "../context";

export default function Projects() {

    const {state, dispatch} = useContext(Context);
    const [addFormName, setAddFormName] = useState('')

    return (<div>
        {state.projectList &&
        <ul>
            {state.projectList.map((project: Project) => (
                <li key={project.id}>{project.name}
                    <button onClick={() => dispatch({
                        type: 'remove',
                        project: project
                    })}>Remove
                    </button>
                </li>
            ))}
        </ul>
        }
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
    </div>)
}