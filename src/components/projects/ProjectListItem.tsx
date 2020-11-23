import React, {useContext} from 'react'
import {Context} from "../../lib/context";
import {Project} from '../../lib/reducers/projects'
import {Link} from "react-router-dom";

interface ProjectItemProps {
    project: Project
}

export function ProjectListItem(props: ProjectItemProps) {
    const {project} = props
    const {state, dispatch} = useContext(Context);
    return (
        <article className="column is-one-third mb-4" key={project.id}>
            <div className="card">
                <header className="card-header">
                    <h3 className="card-header-title">{project.name}</h3>
                </header>
                <div className="card-content">
                    <div className="content">
                        <strong>Columns:</strong> {project.columns.length}<br/>
                        <strong>Notes:</strong> {state.notes.noteList.filter(note => note.project === project.id).length}
                    </div>
                </div>
                <footer className="card-footer">
                    <div className="card-footer-item">
                        <button className="button is-danger" aria-label={"remove-project-" + project.id}
                                onClick={() => dispatch({
                                    type: 'remove',
                                    project: project
                                })}>Remove
                        </button>
                    </div>
                    <Link className="card-footer-item" to={"projects/" + project.id}>View</Link>
                </footer>
            </div>
        </article>
    )
}