import React from "react";
import {Note} from "../../lib/reducers/notes";
import {NoteListItem} from "./NoteListItem";
import {Column, Project} from "../../lib/reducers/projects";

interface NoteListProps {
    notes: Array<Note>
    project: Project
    column: Column
}

export function NoteList(props: NoteListProps) {
    const { notes, project, column } = props
    const sortedNotes = notes.sort(function(a, b) {
        const x = a['order'];
        const y = b['order'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
    return (<ul>
        {sortedNotes.map((note: Note) => <NoteListItem key={note.id} note={note} project={project} column={column} /> )}
    </ul>)
}