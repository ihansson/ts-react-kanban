import {projectReducer, defaultProjects} from "./projects";

import {useTestReducer} from "../../setupTests";

describe('Projects Reducer', () => {

    it('should contain default projects', () => {
        let [state] = useTestReducer(projectReducer, defaultProjects)
        expect(state.projectList.length).toBe(2);
    });

    it('should be able to remove projects', () => {
        let [state, dispatch] = useTestReducer(projectReducer, defaultProjects)
        expect(state.projectList.length).toBe(2);
        state = dispatch({type: 'remove', project: {id: 1}})
        expect(state.projectList.length).toBe(1);
    });

    it('should be able to add projects', () => {
        let [state, dispatch] = useTestReducer(projectReducer, defaultProjects)
        expect(state.projectList.length).toBe(2);
        state = dispatch({type: 'add', project: {id: state.nextProjectId, name: 'Project Test 3'}})
        expect(state.projectList.length).toBe(3);
        expect(state.projectList[2].id).toBe(3);
        expect(state.nextProjectId).toBe(4);
    });

})