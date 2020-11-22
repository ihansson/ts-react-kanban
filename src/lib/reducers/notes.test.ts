import {defaultNotes, noteReducer} from "./notes";

import {useTestReducer} from "../../setupTests";

describe('Notes Reducer', () => {

    it('should contain default notes', () => {
        let [state] = useTestReducer(noteReducer, defaultNotes)
        expect(state.noteList.length).toBe(3);
    });

    it('should be able to remove notes', () => {
        let [state, dispatch] = useTestReducer(noteReducer, defaultNotes)
        expect(state.noteList.length).toBe(3);
        state = dispatch({type: 'remove_note', note: {id: 1}})
        expect(state.noteList.length).toBe(2);
    });

    it('should be able to add notes', () => {
        let [state, dispatch] = useTestReducer(noteReducer, defaultNotes)
        expect(state.noteList.length).toBe(3);
        state = dispatch({type: 'add_note', note: {id: state.nextNoteId, content: 'Note Test 3'}})
        expect(state.noteList.length).toBe(4);
        expect(state.noteList[3].id).toBe(4);
        expect(state.nextNoteId).toBe(5);
    });

})