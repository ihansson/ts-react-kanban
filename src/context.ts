import React from "react";

export interface Project {
    id: number,
    name: string
}

export interface AppContext {
    projectList: Array<Project>,
    nextProjectId: number
}

interface Action {
    type: string,
    project: Project
}

interface IContextProps {
    state: AppContext
    dispatch: (type: Action) => void
}

export const defaultState: AppContext = {
    nextProjectId: 3,
    projectList: [
        {
            id: 1,
            name: 'ProjectItem A'
        }, {
            id: 2,
            name: 'ProjectItem B'
        }
    ]
}

export const Context = React.createContext({} as IContextProps);

export function reducer(state: AppContext, action: Action) {
    switch (action.type) {
        case 'add':
            let _projectList = state.projectList.slice()
            _projectList.push(action.project)
            return {...state, projectList: _projectList, nextProjectId: state.nextProjectId + 1}
        case 'remove':
            return {...state, projectList: state.projectList.filter(x => x.id !== action.project.id)};
        default:
            throw new Error();
    }
}