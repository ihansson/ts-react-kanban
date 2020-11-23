import {filterReorder} from "./utils";
import {Column, Project} from "./projects";

export interface NoteContext {
    noteList: Array<Note>,
    nextNoteId: number
}

export interface Note {
    id: number,
    project: number,
    column: number,
    content: string,
    index: number
}

export interface NoteAction {
    type: string,
    note: Note
}

export interface  NoteDragAction {
    type: string,
    project: Project
    column: Column
    oldIndex: number
    newIndex: number,
    note: Note
}

export function noteReducer(state: NoteContext, action: NoteAction | NoteDragAction) {
    switch (action.type) {
        case 'add_note':
            let _notes = state.noteList.slice()
            _notes.push(action.note)
            return {...state, noteList: _notes, nextNoteId: state.nextNoteId + 1}
        case 'remove_note':
            return {
                ...state, noteList: state.noteList.filter(x => x.id !== action.note.id).map(obj => {
                    let index = obj.index
                    if (obj.project === action.note.project && obj.column === action.note.column && index > action.note.index) {
                        index = index - 1
                    }
                    return {...obj, index}
                })
            };
        case 'move_note_up':
            return {
                ...state, noteList: filterReorder(
                    state.noteList,
                    (obj) => {
                        return obj.project === action.note.project && obj.column === action.note.column
                    },
                    action.note.index,
                    action.note.index - 1)
            }
        case 'move_note_down':
            return {
                ...state, noteList: filterReorder(
                    state.noteList,
                    (obj) => {
                        return obj.project === action.note.project && obj.column === action.note.column
                    },
                    action.note.index,
                    action.note.index + 1)
            }
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
            index: 1
        }, {
            id: 2,
            project: 1,
            column: 1,
            content: 'Project A Note 2',
            index: 2
        }, {
            id: 3,
            project: 2,
            column: 2,
            content: 'Project B Note',
            index: 1
        }
    ],
    nextNoteId: 4
}