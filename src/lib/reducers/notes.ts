export interface NoteContext {
    noteList: Array<Note>,
    nextNoteId: number
}

export interface Note {
    id: number,
    project: number,
    column: number,
    content: string
}

export interface NoteAction {
    type: string,
    note: Note
}

export function noteReducer(state: NoteContext, action: NoteAction) {
    switch (action.type) {
        case 'add_note':
            let _notes = state.noteList.slice()
            _notes.push(action.note)
            return {...state, noteList: _notes, nextNoteId: state.nextNoteId + 1}
        case 'remove_note':
            return {...state, noteList: state.noteList.filter(x => x.id !== action.note.id)};
        default:
            return state
    }
}

export const defaultNotes = {
    noteList: [{
            id: 1,
            project: 1,
            column: 1,
            content: 'Project A Note'
        },{
        id: 2,
        project: 2,
        column: 2,
        content: 'Project B Note'
    }],
    nextNoteId: 3
}