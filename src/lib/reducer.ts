import {ColumnAction, defaultProjects, ProjectAction, projectReducer} from './reducers/projects'
import {AppContext} from "./context";
import {defaultNotes, NoteAction, noteReducer} from "./reducers/notes";

export const defaultState: AppContext = {
    projects: defaultProjects,
    notes: defaultNotes
}

const combineReducers = (slices: any) => (state: any, action: ProjectAction | ColumnAction | NoteAction) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

export const reducer = combineReducers({projects: projectReducer, notes: noteReducer})