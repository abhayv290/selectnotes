import React from 'react'
import { useContext, useState } from 'react';

import NoteContext from '../Context/notes/Notecontext'
import '../index.css'

export default function AddNote(props) {

    const context = useContext(NoteContext)


    const { addNote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "default" })
    //Handle ONclick
    const handleClick = (e) => {

        addNote(note.title, note.description, note.tag);

        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
        props.showAlert('Notes Added', 'success');
    }

    // Handle OnChange

    const onchange = (e) => {
        setnote({
            ...note, [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container my-5 border">

            <h1 style={{ color: '#1d1d4a', fontFamily: 'fantasy' }} className='text-center my-2'>Add Your Notes</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                    <input type="text" className="form-control" id="title" name='title' placeholder="your title here" onChange={onchange} minLength={2} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label"><strong>Description</strong></label>
                    <input style={{ outline: 'none' }} onChange={onchange} className="form-control" id="description" name='description' placeholder='Your description here' rows="3" minLength={9} required />
                </div>
                <button disabled={note.description.length < 9 && note.title.length < 2 ? true : false} type="button" className="btn btn-success " onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}
