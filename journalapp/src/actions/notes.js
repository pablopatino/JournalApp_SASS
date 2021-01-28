import Swal from "sweetalert2";

import { db } from "../firebase/firebase-config"
import { fileUpload } from "../helpers/fileUpload";
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

        dispatch( addnewNote( uid, newNote ) )


    }
}

export const startLoadingNotes = ( uid ) => {
    return async ( dispatch ) => {    

       
        const notas = await  loadNotes( uid );

        
        dispatch(setNotes( notas ))
    }
}

export const addnewNote = (id, note) => ({
    type: types.notesAddnew,
    payload: {
        id, ...note
    }
})

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

export const startSaveNotes = ( note ) => {
    return async( dispatch, getState ) => {
        const uid = getState().auth.uid

        if( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id

        await db.doc(`${uid}/journal/notes/${ note.id }`).update( noteToFirestore );
        
        dispatch( refreshNotes( note.id , noteToFirestore ) )
        Swal.fire('Saved', note.tittle, 'success')

    }
}

//React-journal

export const refreshNotes = ( id, note) => ({
    type: types.notesUpdate,
    payload: {
        id, 
        note:{
            id,
            ...note
        }
    }
})

export const startUploading = ( file ) => {
    return async ( dispatch, getState ) => {

        const {active:activeNote} = getState().notes

        Swal.fire({
            title: "Uploading...",
            text: 'Please Wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })


        const fileUrl = await fileUpload( file )
        activeNote.url = fileUrl;

        dispatch( startSaveNotes( activeNote ) )

        Swal.close();

    
    }
}

export const startDeleting = (id) => {
    return  async ( dispatch, getState ) =>{

        const uid = getState().auth.uid

        await db.doc(`${uid}/journal/notes/${ id }`).delete();

        dispatch( deleteNotes( id ) );

    } 
}

export const deleteNotes = ( id ) => ({
    type: types.notesDelete,
    payload: id
})

export const notslogout = () => ({
    type: types.notesLogOutCleaning,
})