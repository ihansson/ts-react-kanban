export interface Project {
    id: number,
    name: string
}

export interface ProjectAction {
    type: string,
    project: Project
}

export interface ProjectContext {
    projectList: Array<Project>,
    nextProjectId: number
}

export function projectReducer(state: ProjectContext, action: ProjectAction) {
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

export const defaultProjects = {
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