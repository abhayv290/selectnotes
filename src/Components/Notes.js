import React from 'react'
import { useContext } from 'react';
import NoteContext from '../Context/notes/Notecontext'
import NoteItem from './NoteItem';
export default function Notes() {

    const context = useContext(NoteContext);

    const { notes, setnotes } = context;

    return (

        <div className="container">
            <div className="row my-4">
                {notes.map((note) => {
                    return <NoteItem note={note} />;
                })}
            </div>
        </div>
    )


}
