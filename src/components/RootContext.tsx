import {Context} from "../lib/context";
import React, {useReducer} from "react";
import {defaultState, reducer} from "../lib/reducer";
import {BrowserRouter as Router} from 'react-router-dom'

export function RootContext(props: { children: any }) {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const value = {state, dispatch}
    return <Context.Provider value={value}><Router>{props.children}</Router></Context.Provider>
}