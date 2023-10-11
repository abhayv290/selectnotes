import React from 'react'
import { useContext, useState } from 'react';

import NoteContext from '../Context/notes/Notecontext'


export default function AddNote() {

    const context = useContext(NoteContext)


    const { addNote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "default" })
    //Handle ONclick
    const handleclick = (e) => {

        addNote(note.title, note.description, note.tag);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
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
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                    <input type="text" className="form-control" id="title" name='title' placeholder="your title here" onChange={onchange} minLength={2} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><strong>Description</strong></label>
                    <input onChange={onchange} className="form-control" id="description" name='description' placeholder='Your description here' rows="3" minLength={9} required />
                </div>
                <button disabled={note.description.length < 9 && note.title.length < 2 ? true : false} type="button" className="btn btn-success " onClick={handleclick}>Add Note</button>
            </form>
        </div>
    )
}
