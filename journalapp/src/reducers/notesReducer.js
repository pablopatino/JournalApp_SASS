import { types } from "../types/types";


const initialState = {
    notes: [],
    actives: null
}

export const notesReducer = ( state= initialState , action ) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesLoad: 
            return {
                ...state,
                notes: [...action.payload]
            }
        
        case types.notesUpdate:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                        ? action.payload.note 
                        : note
                )
            };
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter( note => note.id !== action.payload )
            }
        case types.notesLogOutCleaning:
            return {
                ...state,
                active:null,
                notes: []
            }
        case types.notesAddnew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes  ]
            }
      
        default:
            return state;
    }
}