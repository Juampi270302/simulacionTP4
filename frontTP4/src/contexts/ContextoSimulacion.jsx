import {createContext, useReducer, useState} from "react";

export const ContextoSimulacion = createContext(null)

const initialState = {
  probTA: 0,
  probTB: 0,
  probTC: 0,
  probTD: 0,
  timeTA: 0,
  timeTB: 0,
  timeTC: 0,
  timeTD: 0,
  timeMin: 0,
  timeMax: 0,
  timeInitTC: 0,
  timeEndTC: 0,
};

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
    default:
      throw new Error();
  }
}

export const ContextoSimulacionHandler = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <ContextoSimulacion.Provider value={{state, dispatch}}>
            {children}
        </ContextoSimulacion.Provider>
    )
}