
import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const host='http://localhost:5000'
   const notesInitial=[
    {
      "_id": "650bde8cc7631dc04a798",
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
    console.log('deleting the note with id' + id);
    const newNote = notes.filter((note) => {
      return note._id!==id;
    }) 
    setnotes(newNote);
  }
    
  // Edit a note
  const editnote =async (id, description, title, tag) => {
    
    //API CALLS
    const url = `${host}/api/notes/updatenotes/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'aplication/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUwOWNkM2M5MGIzNTQwYWMzNmE0M2NiIn0sImlhdCI6MTY5NTE0MTE5MH0.mW524FX1GESbb-PMgJPRr2fOYFO04_ZKBKwH_ktv9z8'
      },
      body: JSON.stringify(data)
    })
    return response.json();
    
      
    console.log('editing the notes with id' + id);
    for (let i = 0; i < notes.length(); i++) {
      if (notes._id === id) {
        notes.description = description;
        notes.title = title;
        notes.tag = tag;
      }
    }
  }
  


  
  
    
    return (

        <NoteContext.Provider value={{notes,addNote,deleteNote,editnote}}>
            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState;