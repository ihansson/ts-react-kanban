export interface Column {
    id: number,
    name: string
}

export interface Project {
    id: number,
    name: string,
    nextColumnId: number,
    columns: Array<Column>
}

export interface ProjectAction {
    type: string,
    project: Project
}

export interface ColumnAction {
    type: string,
    project: Project,
    column: Column
}

export interface ProjectContext {
    projectList: Array<Project>,
    nextProjectId: number
}

export function projectReducer(state: ProjectContext, action: ProjectAction | ColumnAction) {
    switch (action.type) {
        case 'add':
            let _projectList = state.projectList.slice()
            action.project.columns = defaultColumns.slice()
            _projectList.push(action.project)
            return {...state, projectList: _projectList, nextProjectId: state.nextProjectId + 1}
        case 'remove':
            return {...state, projectList: state.projectList.filter(x => x.id !== action.project.id)};
        case 'add_column':
            return {
                ...state, projectList: state.projectList.map(x => {
                    if (x.id !== action.project.id) return x;
                    const columns = x.columns.slice();
                    if ("column" in action) {
                        columns.push(action.column)
                    }
                    return {...x, nextColumnId: x.nextColumnId + 1, columns}
                })
            };
        case 'remove_column':
            return {
                ...state, projectList: state.projectList.map(x => {
                    if (x.id !== action.project.id || !("column" in action)) return x;
                    return {...x, columns: x.columns.filter(x => x.id !== action.column.id)};
                })
            };
        default:
            return state
    }
}

export const defaultColumns = [{id: 1, name: "Column A"}, {id: 2, name: "Column B"}]

export const defaultProjects = {
    nextProjectId: 3,
    projectList: [
        {
            id: 1,
            name: 'ProjectItem A',
            columns: defaultColumns.slice(),
            nextColumnId: 3
        }, {
            id: 2,
            name: 'ProjectItem B',
            columns: defaultColumns.slice(),
            nextColumnId: 3
        }
    ]
}