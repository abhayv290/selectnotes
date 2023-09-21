import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/notes/Notecontext'
export default function About() {

  const a = useContext(NoteContext)
  
  useEffect(() => {
    a.update();
  })

  return (
    <div>This is About {a.state.name} and he is {a.state.age} is year old</div>
  )
}

