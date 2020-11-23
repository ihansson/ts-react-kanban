import React, {useCallback} from "react";
import {Note} from "../../lib/reducers/notes";
import {NoteListItem} from "./NoteListItem";
import {Column, Project} from "../../lib/reducers/projects";

interface NoteListProps {
    notes: Array<Note>
    project: Project
    column: Column
}

export function NoteList(props: NoteListProps) {

    const {notes, project, column} = props

    const sortedNotes = notes.sort(function (a, b) {
        const x = a['index'];
        const y = b['index'];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });

    const moveCard = useCallback(
        (dragIndex: number, hoverIndex: number) => {},
        [],
    );

    return (<section>
        {sortedNotes.map((note: Note) => <NoteListItem
            index={note.index}
            id={note.id}
            key={note.id}
            note={note}
            project={project}
            column={column}
            moveCard={moveCard}
        />)}
    </section>)
}