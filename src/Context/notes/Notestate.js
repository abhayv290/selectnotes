
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
    
    return (

        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}

        </NoteContext.Provider>
    )

}

export default NoteState;