import React from 'react'
import { useContext } from 'react';
import NoteContext from '../Context/notes/Notecontext'
import NoteItem from './NoteItem';
import AddNote from './AddNote'
export default function Notes() {

const context = useContext(NoteContext);

const {notes,addNote} = context;

    return (
        <>
             <AddNote/>
      
        <div className="container">
            <div className="row my-4">
                {notes.map((note,index) => {
                    return <NoteItem note={note} key={index} />;
                })}
            </div>
            </div>
            </>
    )


}
