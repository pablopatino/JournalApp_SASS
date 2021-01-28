import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes, startUploading } from '../../actions/notes'

export const NotesAppBar = () => {

    const dispatch = useDispatch()

    const { active } = useSelector(state => state.notes)

    console.log(active)
    const handleSave = () => {

        dispatch(startSaveNotes( active ))

    }

    const pictureUpload = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {

        const file = e.target.files[0]

        if (file) {
            dispatch( startUploading( file ) );
        }

    }

    return (
        <div className="notes_appbar">
            <span> 28 de agosto de 2020 </span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style = { {display: 'none'} }
                onChange = { handleFileChange }
            />


            <div>
                <button 
                    className="btn"
                    onClick= { pictureUpload }
                >
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
