import React from 'react'

import { Redirect, Route } from 'react-router-dom'

export const PublicRoute = ({
    isLoggin,
    component: Component,
    ...rest }) => {
        return (
            <Route { ...rest }
                component = { ( props ) => (
                    ( !isLoggin )?
                        (<Component { ...props } />)
                        : ( <Redirect to="/" /> )
                ) }
            />
                
            
        )
    }
