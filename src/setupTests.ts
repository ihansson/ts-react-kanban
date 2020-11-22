// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export function useTestReducer(reducer, state){
    function dispatch(action){
        return reducer(state, action)
    }
    return [
        {...state},
        dispatch
    ]
}