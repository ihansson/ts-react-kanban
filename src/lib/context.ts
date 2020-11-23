import React from "react";
import {ColumnAction, ProjectAction, ProjectContext} from './reducers/projects'
import {NoteAction, NoteContext, NoteDragAction} from "./reducers/notes";

export interface AppContext {
    projects: ProjectContext
    notes: NoteContext
}

interface IContextProps {
    state: AppContext
    dispatch: (type: ProjectAction | ColumnAction | NoteAction | NoteDragAction) => void
}

export const Context = React.createContext({} as IContextProps);
