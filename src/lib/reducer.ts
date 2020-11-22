import {ColumnAction, defaultProjects, ProjectAction, projectReducer} from './reducers/projects'
import {AppContext} from "./context";

export const defaultState: AppContext = {
    projects: defaultProjects
}

const combineReducers = (slices: any) => (state: any, action: ProjectAction | ColumnAction) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

export const reducer = combineReducers({projects: projectReducer})