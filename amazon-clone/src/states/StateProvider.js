import React,{createContext,useContext,useReducer} from 'react'


//Prepares the data layer
export const StateContext=createContext();


//Wrapping out app and providing the data layer
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}

    </StateContext.Provider>

    
);

//Pulling Information from data layer

export const useStateValue=()=>useContext(StateContext);