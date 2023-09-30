
import NoteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000/api/notes'
  const notesInitial = [];


  const [notes, setnotes] = useState(notesInitial);

  // FETCH ALL NOTES---->>>

  const GetNotes = () => {
    //API CALLS
    const url = `${host}/fetchnotes`;
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'aplication/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUwYmRkZDVjNzYzMWRjNjg3MDRhNzkxIn0sImlhdCI6MTY5NTI3NjU1MH0.StzkEPCxFLRM0JE6kDCmKM1FoktuNa_iccJ5x--bgLU',
      }

    })

      .then((response) => {
        return response.json();
      })
      .then((json) => {

        console.log(json);
        setnotes(json);

      }).catch((error) => {
        console.log(error);
      })
  }








  // ADD A NOTE---->>>


  const addNote = async (title, description, tag) => {
    //API CALLS
    try {
      const url = `${host}/addnotes`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'aplication/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUwYmRkZDVjNzYzMWRjNjg3MDRhNzkxIn0sImlhdCI6MTY5NTI3NjU1MH0.StzkEPCxFLRM0JE6kDCmKM1FoktuNa_iccJ5x--bgLU'
        },
        body: JSON.stringify({ title, description, tag }),
      })
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error)
    }
    const note = {
      "title": title,
      "description": description,
      "tag": tag,
    }
    setnotes(notes.concat(note));





  }

  //DELETE A NOTE ----->>>> 

  const deleteNote = async (id) => {
    //API CALLS
    try {
      const url = `${host}/deletenote/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'aplication/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUwYmRkZDVjNzYzMWRjNjg3MDRhNzkxIn0sImlhdCI6MTY5NjAyMjcxNn0.S3kKxwzbveBpfjnoNz0lZ8r8kUMwdcJyJtvEmkAhqM0'
        }
      })

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }

    console.log('deleting the note with id' + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    })
    setnotes(newNote);
  }



  // EDIT A NOTE----->>>>
  const editnote = async (id, description, title, tag) => {

    //API CALLS
    const url = `${host}/updatenotes/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'aplication/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUwYmRkZDVjNzYzMWRjNjg3MDRhNzkxIn0sImlhdCI6MTY5NjAyMjcxNn0.S3kKxwzbveBpfjnoNz0lZ8r8kUMwdcJyJtvEmkAhqM0'
      },
      body: JSON.stringify(title, description, tag),
    })
    const json = response.json();



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

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editnote, GetNotes }}>
      {props.children}

    </NoteContext.Provider>
  )

}

export default NoteState;