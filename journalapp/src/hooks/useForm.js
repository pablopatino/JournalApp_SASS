import { useState } from 'react'

export const useForm = ( initialState = {} ) => {

    const [formularios, setformularios] = useState( initialState )


    const reset = () => {
        setformularios( initialState )
    }



    const manejarFormulario= ({ target }) => {
        
        setformularios({
            ...formularios,
            [ target.name ]: target.value
        })
    }


    return [ formularios, manejarFormulario, reset ]
}