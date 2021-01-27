import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { NotesAppBar } from './NotesAppBar'



export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes)

    const [ formularios, manejarFormulario ] = useForm( note )

    const { body, title } = formularios; 
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some Awesome"
                    className="notes__title-input"
                    value = { title }
                    onChange= { manejarFormulario }
                />

                <textarea
                    placeholder="What happened"
                    className="notas__textarea"
                    value = {body }                  
                    onChange= { manejarFormulario }                     
                >

                </textarea>

                    {
                        (note.url) &&
                        (
                            <div className="notes__image">
                                <img 
                                    src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                                    alt="imagen"
                                />
                            </div>
                        )            
                    }
            </div>

        </div>
    )
}
