import {ProjectAction, defaultProjects} from './projects'

import {projectReducer} from "./projects";
import {AppContext} from "./context";

export const defaultState: AppContext = {
    projects: defaultProjects
}

const combineReducers = (slices: any) => (state: any, action: ProjectAction) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

export const reducer = combineReducers({projects:projectReducer})