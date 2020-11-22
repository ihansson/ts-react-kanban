import React from "react";
import {ProjectAction, ProjectContext} from './projects'

export interface AppContext {
    projects: ProjectContext
}

interface IContextProps {
    state: AppContext
    dispatch: (type: ProjectAction) => void
}

export const Context = React.createContext({} as IContextProps);
