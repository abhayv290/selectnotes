/* eslint-disable no-unused-vars */

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
        'content-type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUyODY0NGU1Njc1Mjc4ZDYzOTRlMGY0In0sImlhdCI6MTY5NzE0NjA0OH0.FuF2S5xVZU5HgVSfb4dcip6xOmSQkqoYSBoIZprTEj8',
      }

    })

      .then((response) => {
        return response.json();
      })
      .then((json) => {

        //console.log(json);
        setnotes(json);

      }).catch((error) => {
        console.log(error);
      })
  }








  // ADD A NOTE---->>>


  const addNote = async (title, description, tag) => {
    // API CALLS
    try {
      const url = `${host}/addnotes`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUyODY0NGU1Njc1Mjc4ZDYzOTRlMGY0In0sImlhdCI6MTY5NzE0NjA0OH0.FuF2S5xVZU5HgVSfb4dcip6xOmSQkqoYSBoIZprTEj8',
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      //console.log(json);
    } catch (error) {
      console.log(error);
    }

    const note = {
      title: title,
      description: description,
      tag: tag,
    };
    setnotes(notes.concat(note));
  };







  //DELETE A NOTE ----->>>> 

  const deleteNote = async (id) => {
    //API CALLS
    try {
      const url = `${host}/deletenote/${id}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUyODY0NGU1Njc1Mjc4ZDYzOTRlMGY0In0sImlhdCI6MTY5NzE0NjA0OH0.FuF2S5xVZU5HgVSfb4dcip6xOmSQkqoYSBoIZprTEj8'
        }
      })

      const json = await response.json();
      //console.log(json);
    } catch (error) {
      console.log(error);
    }

    //console.log('deleting the note with id' + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    })
    setnotes(newNote);
  }



  // EDIT A NOTE----->>>>
  const editnote = async (id, title, description, tag) => {

    //API CALLS
    try {


      const url = `${host}/updatenotes/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyIjp7ImlkIjoiNjUyODY0NGU1Njc1Mjc4ZDYzOTRlMGY0In0sImlhdCI6MTY5NzE0NjA0OH0.FuF2S5xVZU5HgVSfb4dcip6xOmSQkqoYSBoIZprTEj8'
        },
        body: JSON.stringify({ title, description, tag })
      })

      const json = response.json();
      //console.log(json);



    } catch (error) {
      console.log(error);
    }
    const newnotes = JSON.parse(JSON.stringify(notes));
    // console.log('editing the notes with id: ' + id);
    for (let i = 0; i < newnotes.length; i++) {
      const element = newnotes[i];
      if (element._id === id) {
        newnotes[i].title = title;
        newnotes[i].description = description;
        newnotes[i].tag = tag;
        break;
      }

    }
    setnotes(newnotes);
  }






  return (

    <NoteContext.Provider value={{ notes, addNote, deleteNote, editnote, GetNotes }}>
      {props.children}

    </NoteContext.Provider>
  )

}

export default NoteState;