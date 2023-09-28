import React from 'react'
import { useContext } from 'react';
import NoteContext from '../Context/notes/Notecontext'
export default function NoteItem(props) {

 const context = useContext(NoteContext);
   
    const { deleteNote } = context;
    const { note } = props;



    return (
        <>
            <div className=" col-md-4 my-4">

                <div className="card" style={{ width: '20rem' }} >

                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>

                        <div className="d-flex ">
                            <i className="fa-solid fa-trash mx-3 text-danger" onClick={()=>{deleteNote(note._id)}}></i>
                            <i className="fa-solid fa-pen-to-square"></i>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
