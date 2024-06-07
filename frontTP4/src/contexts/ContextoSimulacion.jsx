import {createContext, useReducer, useState} from "react";

export const ContextoSimulacion = createContext(null)

const initialState = {
    probTA: 0.3,
    probTB: 0.25,
    probTC: 0.25,
    probTD: 0.2,
    timeTA: 2,
    timeTB: 1,
    timeTC: 3,
    timeTD: 1,
    timeMin: 5,
    timeMax: 5,
    timeInitTC: 15,
    timeEndTC: 15,
    cantTimeSim: 100,
    initTimeView: 50,
    cantSimIterations: 50
};
5

function reducer(state, action) {
    switch (action.type) {
        case 'setProbTA':
            return {...state, probTA: action.value};
        case 'setProbTB':
            return {...state, probTB: action.value};
        case 'setProbTC':
            return {...state, probTC: action.value};
        case 'setProbTD':
            return {...state, probTD: action.value};
        case 'setTimeTA':
            return {...state, timeTA: action.value};
        case 'setTimeTB':
            return {...state, timeTB: action.value};
        case 'setTimeTC':
            return {...state, timeTC: action.value};
        case 'setTimeTD':
            return {...state, timeTD: action.value};
        case 'setTimeMin':
            return {...state, timeMin: action.value};
        case 'setTimeMax':
            return {...state, timeMax: action.value};
        case 'setTimeInitTC':
            return {...state, timeInitTC: action.value};
        case 'setTimeEndTC':
            return {...state, timeEndTC: action.value};
        case 'setCantTimeSim':
            return {...state, cantTimeSim: action.value};
        case 'setInitTimeView':
            return {...state, initTimeView: action.value};
        case 'setCantSimIterations':
            return {...state, cantSimIterations: action.value};
        default:
            throw new Error();
    }
}

export const ContextoSimulacionHandler = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    return (
        <ContextoSimulacion.Provider value={{state, dispatch}}>
            {children}
        </ContextoSimulacion.Provider>
    )
}