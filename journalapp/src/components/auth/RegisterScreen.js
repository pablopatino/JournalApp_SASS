import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div>
        <h3 className="auth__title"> Register </h3>

        <form>

            <input
                type="text"
                placeholder="Name"
                name="Name"
                className="auth__input"
                autoComplete="off"
            />

            <input
                type="text"
                placeholder="email"
                name="email"
                className="auth__input"
                autoComplete="off"
            />
            <br />
            <input
                type="password"
                placeholder="password"
                name="password"
                className="auth__input"
            />
             <input
                type="password"
                placeholder="Confirm password"
                name="password2"
                className="auth__input"
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
