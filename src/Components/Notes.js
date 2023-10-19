import React from 'react'
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../Context/notes/Notecontext'
import NoteItem from './NoteItem';
import AddNote from './AddNote'
export default function Notes(props) {

    const context = useContext(NoteContext);
    const navigate = useNavigate();
    const { notes, GetNotes, editnote } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            GetNotes();
        }
        else {
            navigate('/login');

        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "default" })


    //Creating  the useRef variables

    const refClose = useRef(null);
    const ref = useRef(null);
    const updatenote = (currentnote) => {
        ref.current.click();

        setnote({ id: currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag });
    }

    //Handle ONclick

    const handleClick = (e) => {
        editnote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        //console.log('note updated');
        props.showAlert('Note updated successfully', 'success');
    }

    // Handle OnChange

    const onchange = (e) => {
        setnote({
            ...note, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <AddNote showAlert={props.showAlert} />
            <button ref={ref} type="button" className='d-none  btn btn-primary'
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                launch modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="bg-success modal-header">
                            <h1 className="text-white text-center modal-title fs-5" id="exampleModalLabel">Update Note</h1>
                            <button ref={refClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="email" className="form-control" id="etitle" name='etitle' placeholder="your title here" value={note.etitle} onChange={onchange} minLength={1} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input onChange={onchange} value={note.edescription} className="form-control" id="edescription" name='edescription' placeholder='Your description here' rows="3" minLength={5} required />
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">
                            <button disabled={note.edescription.length < 9 && note.etitle.length < 2 ? true : false} type="button" className="btn btn-primary" onClick={handleClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row my-4">
                    {notes.map((note, index) => {
                        return <NoteItem note={note} updatenote={updatenote} key={index} showAlert={props.showAlert} />
                    })}
                </div>
            </div>
        </>
    )


}
