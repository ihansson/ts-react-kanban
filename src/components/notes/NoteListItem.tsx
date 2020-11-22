import React, {useContext} from "react";
import {Note, NoteAction} from "../../lib/reducers/notes";
import {Context} from "../../lib/context";
import {Column, Project} from "../../lib/reducers/projects";

interface NoteListItemProps {
    note: Note
    project: Project
    column: Column
}

export function NoteListItem(props: NoteListItemProps) {
    const { note, column } = props
    const {dispatch} = useContext(Context);

    return (<li key={note.id}>
        {note.id} ({note.order})
        <button aria-label={"move-note-up-" + column.id} onClick={() => dispatch({
            type: 'move_note_up',
            note: note
        } as NoteAction)}>Up
        </button>
        <button aria-label={"move-note-down-" + column.id} onClick={() => dispatch({
            type: 'move_note_down',
            note: note
        } as NoteAction)}>Down
        </button>
        {note.content}
        <button aria-label={"remove-note-" + note.id} onClick={() => dispatch({
            type: 'remove_note',
            note: note
        } as NoteAction)}>Remove
        </button>
    </li>);
}