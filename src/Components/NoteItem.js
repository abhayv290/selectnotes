import React from 'react'

export default function NoteItem(props) {
    const { note } = props;
    return (
        <>
            <div className=" col-md-4 my-4">

                <div className="card" style={{ width: '20rem' }} >
                   
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                       
                    </div>
                </div>

            </div>
        </>
    )
}
