
import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
   const notesInitial=[
    {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": "Watch the video",
      "description": "Just Watch it man",
      "tag": "Youtube and insta",
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
    },
    {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": "Watch the video",
      "description": "Just Watch it man",
      "tag": "Youtube and insta",
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
    },
    {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": "Watch the video",
      "description": "Just Watch it man",
      "tag": "Youtube and insta",
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
    },
    {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": "Watch the video",
      "description": "Just Watch it man",
      "tag": "Youtube and insta",
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
    },
    {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": "Watch the video",
      "description": "Just Watch it man",
      "tag": "Youtube and insta",
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
     },
    {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": "Watch the video",
      "description": "Just Watch it man",
      "tag": "Youtube and insta",
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
    },
    ]
    
    const [notes, setnotes] = useState(notesInitial);

  // Add a Note
  const addNote = (title,description,tag) => {
    const note = {
      "_id": "650bde8cc7631dc68704a798",
      "user": "650bddd5c7631dc68704a791",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-09-21T06:11:24.632Z",
      "__v": 0
    }

    setnotes(notes.concat(note))
  }

  //Delete  A NOte  

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note_id !== id;
    }) 
    setnotes(newNote);
  }
  // Edit a note
  const editnote = () => {
    
  }
  


  
  
    
    return (

        <NoteContext.Provider value={{notes,addNote,deleteNote,editnote}}>
            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState;