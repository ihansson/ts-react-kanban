import React from "react";
import {Note} from "../../lib/reducers/notes";
import {NoteListItem} from "./NoteListItem";

interface NoteListProps {
    notes: Array<Note>
}

export function NoteList(props: NoteListProps) {
    const { notes } = props
    return (<ul>
        {notes.map((note: Note) => <NoteListItem key={note.id} note={note} /> )}
    </ul>)
}