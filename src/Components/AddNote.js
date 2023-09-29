import React from 'react'
import { useContext, useState } from 'react';

import NoteContext from '../Context/notes/Notecontext'


export default function AddNote() {

    const context = useContext(NoteContext)


    const { addNote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "default" })
    //Handle ONclick
    const handleclick = (e) => {        
        e.preventDefault();
        addNote(note.title, note.description ,note.tag);
        console.log('new note added');
    }

    // Handle OnChange

    const onchange = (e) => {
        setnote({
            ...note, [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container my-5 border border-primary">

            <h1 className='text-center my-2 text-primary'>Add your Notes</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="email" className="form-control" id="title" name='title' placeholder="your title here" onChange={onchange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input onChange={onchange} className="form-control" id="description" name='description' placeholder='Your description here' rows="3"/>
                </div>
                <button type="button" className="btn btn-success " onClick={handleclick}>Add</button>
            </form>
        </div>
    )
}
