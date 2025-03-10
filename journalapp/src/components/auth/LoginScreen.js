import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { Link} from 'react-router-dom'
import { startGoogleLogin, startloginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const {loading} = useSelector( state => state.ui );
   
   


    const [ formularios, manejarFormulario ] = useForm({
        email:'pablopatino@gmail.com',
        password: '12345678'
    });

    const { email, password } = formularios;


    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( startloginEmailPassword( email, password ) )

    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());

    }


    
    return (
        <div>
            <h3 className="auth__title"> Login </h3>

            <form onSubmit= { handleLogin }>
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

             
               
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled = { loading }
                    > 
                        Login
                    </button>
                
        

                <div className="auth__social-networks">

                    <p>Login With Social Networks</p>
                    
                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create new account
                </Link>


            </form>
        </div>
    )
}
