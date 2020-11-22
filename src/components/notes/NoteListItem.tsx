import React, {useContext} from "react";
import {Note, NoteAction} from "../../lib/reducers/notes";
import {Context} from "../../lib/context";

interface NoteListItemProps {
    note: Note
}

export function NoteListItem(props: NoteListItemProps) {
    const { note } = props
    const {dispatch} = useContext(Context);

    return (<li key={note.id}>
        {note.content}
        <button aria-label={"remove-note-" + note.id} onClick={() => dispatch({
            type: 'remove_note',
            note: note
        } as NoteAction)}>Remove
        </button>
    </li>);
}