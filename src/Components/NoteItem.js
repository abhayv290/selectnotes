import React from 'react'
import { useContext } from 'react';
import NoteContext from '../Context/notes/Notecontext'


export default function NoteItem(props) {

    const context = useContext(NoteContext);

    const { deleteNote } = context;
    const { note, updatenote } = props;

    const notedelete = () => {
        deleteNote(note._id);
        props.showAlert('Notes Deleted', 'success');
    }

    return (
        <>
            <div className=" col-md-4 my-4">

                <div className="card" style={{ width: '20rem', backgroundImage: "url('https://th.bing.com/th/id/OIP.Zf7-yWZ_vZZUUyGVMKN0MgHaFC?pid=ImgDet&rs=1')" }}>

                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>

                        <div className="d-flex ">
                            <i className="fa-solid fa-trash mx-3 text-danger" onClick={notedelete}></i>
                            <i className="fa-solid fa-pen-to-square" onClick={() => { updatenote(note) }}></i>

                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
