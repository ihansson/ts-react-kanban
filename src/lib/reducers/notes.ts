import {filterReorder} from "./utils";

export interface NoteContext {
    noteList: Array<Note>,
    nextNoteId: number
}

export interface Note {
    id: number,
    project: number,
    column: number,
    content: string,
    order: number
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
            return {...state, noteList: state.noteList.filter(x => x.id !== action.note.id).map(obj => {
                    let order = obj.order
                    if(obj.project === action.note.project && obj.column === action.note.column && order > action.note.order){
                        order = order - 1
                    }
                    return {...obj, order}
                })};
        case 'move_note_up':
            return {...state, noteList: filterReorder(
                    state.noteList,
                    (obj) => { return obj.project === action.note.project && obj.column === action.note.column },
                    action.note.order,
                    action.note.order - 1)}
        case 'move_note_down':
            return {...state, noteList: filterReorder(
                    state.noteList,
                    (obj) => { return obj.project === action.note.project && obj.column === action.note.column },
                    action.note.order,
                    action.note.order + 1)}
        default:
            return state
    }
}

export const defaultNotes = {
    noteList: [
        {
            id: 1,
            project: 1,
            column: 1,
            content: 'Project A Note',
            order: 1
        },{
            id: 2,
            project: 1,
            column: 1,
            content: 'Project A Note 2',
            order: 2
        },{
            id: 3,
            project: 2,
            column: 2,
            content: 'Project B Note',
            order: 1
        }
    ],
    nextNoteId: 4
}