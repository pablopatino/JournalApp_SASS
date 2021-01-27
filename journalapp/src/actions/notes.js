import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types"


export const StartnewNote = () => {
    return async ( dispatch, getState ) => {

        const uid = getState().auth.uid
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add( newNote )
        
        dispatch(activeNotes( doc.id, newNote ))

    }
}

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {    

       
        const notas = await  loadNotes( uid );

        
        dispatch(setNotes( notas ))
    }
}

export const activeNotes = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (  notes ) => ({
    type: types.notesLoad,
    payload: notes
})