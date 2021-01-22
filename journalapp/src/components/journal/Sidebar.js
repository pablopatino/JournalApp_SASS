import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar">
            <div className="jornal_sidebar-navbar">

                <h3>
                    <i className="far fa-moon"></i>
                    <span> Pablo </span>
                </h3>

                <button className="btn">
                    LogOut
                </button>

            </div>
            <div className="jorunal__new-entry">
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
