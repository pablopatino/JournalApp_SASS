import React from 'react'
import validator from "validator";

import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const { ui:{ msgError } } = state


    const [ formularios, manejarFormulario ] = useForm({
        name: 'Pablo',
        email:'pablopatino@gmail.com',
        password: '12345678',
        password2: '12345678' 
    })

    const {name, email, password, password2} = formularios 

    const handleinputForm = (e) => {

        e.preventDefault();

        if( isFormValid() ){
            dispatch( startRegisterWithEmailPassword(email, password, name) )
        }

    }

    const isFormValid = () => { 

        if ( name.trim().length <= 2 ) {
            dispatch( setError( 'El nombre es requerido' ) )
            return false;
        } else if ( !validator.isEmail( email ) ){
            dispatch( setError( 'No es un email' ) )
            return false;
        } else if ( password !== password2 || password < 5){
            dispatch( setError( 'Password deberia de tener 6 o mas characters y debe de coincidir')  )
            return false;
        }

        dispatch( removeError() )
        return true
    }




    return (
        <div>
        <h3 className="auth__title"> Register </h3>

        <form onSubmit ={ handleinputForm } >
            {
                
                msgError && 
                (   <div className="auth__alert-error">
                        { msgError }
                    </div>
                )

            }

            <input
                type="text"
                placeholder="name"
                name="name"
                className="auth__input"
                autoComplete="off"
                value = { name }
                onChange = { manejarFormulario }
            />

            <input
                type="text"
                placeholder="email"
                name="email"
                className="auth__input"
                autoComplete="off"
                value = { email }
                onChange = { manejarFormulario }
            />
            <br />
            <input
                type="password"
                placeholder="password"
                name="password"
                className="auth__input"
                value = { password }
                onChange = { manejarFormulario }
            />
             <input
                type="password"
                placeholder="Confirm password"
                name="password2"
                className="auth__input"
                value = { password2 }                         
                onChange = { manejarFormulario }   
            />

         
            <button
                type="submit"
                className="btn btn-primary btn-block mb-5"
                
            > 
                Registered
            </button>

            <Link to="/auth/login" className="link mt-5">
                Alredy Registered?
            </Link>


        </form>
    </div>
    )
}
