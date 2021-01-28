import React, { useEffect, useRef } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { activeNotes, startDeleting } from '../../actions/notes'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'



export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes)
    const [ formularios, manejarFormulario, reset ] = useForm( note )
    const { body, title, id } = formularios; 

    const activeId = useRef( note.id )

    const dispatch = useDispatch()

    useEffect(() => {
        
        if( note.id !== activeId.current ){
            reset( note )
            activeId.current = note.id
        }


    }, [note, reset])


    useEffect(() => {
        
        dispatch( activeNotes( formularios.id, { ...formularios } ) )
 
    }, [ formularios, dispatch ])


    const handleDelete= () => {
        dispatch( startDeleting( id ) )
    }




    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some Awesome"
                    className="notes__title-input"
                    value = { title }
                    name =  "title"
                    onChange= { manejarFormulario }
                />

                <textarea
                    placeholder="What happened"
                    className="notas__textarea"
                    value = { body }
                    name = "body"                 
                    onChange= { manejarFormulario }                     
                >

                </textarea>

                    {
                        (note.url) &&
                        
                        (
                            <div className="notes__image">
                                <img 
                                    src={ note.url }
                                    alt="imagen"
                                />
                            </div>
                        )            
                    }
            </div>

            <button className= "btn btn-danger" onClick={ handleDelete }>
                    Delete
            </button>

        </div>
    )
}
