import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../Context/notes/Notecontext'
import NoteItem from './NoteItem';
import AddNote from './AddNote'
export default function Notes() {

    const context = useContext(NoteContext);

    const { notes, GetNotes, editnotes } = context;

    useEffect(() => {

        GetNotes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })


    //Creating  the useRef variables

    const refclose = useRef(null);
    const ref = useRef(null);
    const updatenote = (currentnote) => {
        ref.current.click();
        setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    }

    //Handle ONclick
    const handleclick = (e) => {

        editnotes(note._id, note.etitle, note.edescription, note.etag);
        refclose.current.click();
        console.log('note updated');
    }

    // Handle OnChange

    const onchange = (e) => {
        setnote({
            ...note, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className='d-none  btn btn-primary'
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                launch modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="bg-success modal-header">
                            <h1 className="text-white text-center modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                            <button ref={refclose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="etitle" name='etitle' placeholder="your title here" value={note.etitle} onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input onChange={onchange} value={note.edescription} className="form-control" id="edescription" name='edescription' placeholder='Your description here' rows="3" />
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={handleclick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row my-4">
                    {notes.map((note, index) => {
                        return <NoteItem note={note} updatenote={updatenote} key={index} />
                    })}
                </div>
            </div>
        </>
    )


}
