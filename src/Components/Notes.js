import React from 'react'
import { useContext, useEffect, useRef } from 'react';
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


    const ref = useRef(null);
    const updatenote = (note) => {
        ref.current.click();
    }

    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className='btn btn-primary'
                data-bs-toggle="modal" data-bs-target="#exampleModal">
                launch modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row my-4">
                    {notes.map((note) => {
                        return <NoteItem note={note} updatenote={updatenote} key={note._id} />;
                    })}
                </div>
            </div>
        </>
    )


}
