import { useState } from "react";

const initValue = {string: ''}

export function StringReducer(state= initValue, action){
    if(action.type === 'string/update-string'){
        return {
            ...state,
            string: action.payload
        }
    }
    return state;
}