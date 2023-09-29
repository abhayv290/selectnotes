import React from 'react'
import { useContext, useEffect } from 'react';
import NoteContext from '../Context/notes/Notecontext'
import NoteItem from './NoteItem';
import AddNote from './AddNote'
export default function Notes() {

    const context = useContext(NoteContext);

    const { notes, GetNotes } = context;

    useEffect(() => {

        GetNotes();
    }, []);





    return (
        <>
            <AddNote />

            <div className="container">
                <div className="row my-4">
                    {notes.map((note) => {
                        return <NoteItem note={note} key={note._id} />;
                    })}
                </div>
            </div>
        </>
    )


}
