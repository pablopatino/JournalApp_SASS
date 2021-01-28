import { types } from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { FinishLoading, StartLoading } from "./ui"
import Swal from "sweetalert2";
import { notslogout } from "./notes";


export const startloginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {

        dispatch(StartLoading())
        setTimeout(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({ user }) => {
                dispatch(
                    login( user.uid, user.displayName ))
                    dispatch(FinishLoading())
            } ).catch(e => {
                console.log(e)
                dispatch(FinishLoading())
                Swal.fire('Error', e.message, 'error')
            })
        }, 3500);
           
    }
}


export const startRegisterWithEmailPassword = (email, password, name) => {
    return ( dispatch ) => {

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then( async({ user }) => {

                   await user.updateProfile({ displayName:name });

                    dispatch( 
                        login( user.uid, user.displayName )
                    )
                }).catch( e => {
                    console.log(e)
                    Swal.fire('Error', e.message, 'error')
                } )
    }
}

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( 
                    login( user.uid, user.displayName )
                )
            })

    }
}



export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}

export const startLogOut = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
        dispatch( notslogout() )
        
    }
}

export const logout = () => {
    return {
        type: types.Logout
    }
}

