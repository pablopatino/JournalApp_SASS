import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some Awesome"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happened"
                    className="notas__textarea"
                >

                </textarea>


                <div className="notes__image">
                    <img 
                        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                        alt="imagen"
                    />
                </div>            

            </div>

        </div>
    )
}
