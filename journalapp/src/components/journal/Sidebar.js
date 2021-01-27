import React from 'react'


import { JournalEntries } from './JournalEntries'
import { useDispatch, useSelector } from "react-redux";
import { startLogOut } from '../../actions/auth';
import { StartnewNote } from '../../actions/notes';


export const Sidebar = () => {

    const dispatch = useDispatch()

    const { name } = useSelector(state => state.auth)

    const handleLogOut = () => {
        dispatch( startLogOut() )
    }

    const handleNewEntry = () => {
        dispatch( StartnewNote() );
    }

    return (
        <aside className="journal__sidebar">
            <div className="jornal_sidebar-navbar">

                <h3>
                    <i className="far fa-moon"></i>
                    <span> { name } </span>
                </h3>

                <button className="btn" onClick={ handleLogOut }>
                    LogOut
                </button>

            </div>
            <div 
                className="jorunal__new-entry"
                onClick= { handleNewEntry }
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <br />
                <p className="mt-5">
                    New Entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
