import React, { useEffect, useState } from 'react'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from "react-router-dom";

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from "react-redux";
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import {  startLoadingNotes } from '../actions/notes';


export const AppRouter = () => {

    const dispatch = useDispatch()

    const [ checking, setchecking ] = useState(true)
    const [ isLoggin, setisLoggin ] = useState(false)


    useEffect(() => {

        firebase.auth().onAuthStateChanged( async (user) => {
            
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) )
                setisLoggin( true ); 

                dispatch(startLoadingNotes( user.uid ))
                         
            } else {
                setisLoggin( false );
            }
            setchecking( false ) ; 
        });

    }, [ dispatch, setchecking, setisLoggin ])

    console.log(isLoggin)

    if ( checking ){
        return ( 
            
            <h1> Espera... </h1>
        )
    }

    return (
        <Router>
            <div>              
                <Switch>
                    <PublicRoute path="/auth" component= { AuthRouter } isLoggin = { isLoggin } />
                        
                    
                    <PrivateRoute exact path="/" component={ JournalScreen } isLoggin= { isLoggin } />
                    

                    <Redirect to="/auth/login" />

                    
                </Switch>
            </div>
        </Router>
    )
}
