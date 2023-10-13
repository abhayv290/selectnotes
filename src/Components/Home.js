import React from 'react'
import Notes from './Notes'



export default function Home(props) {
  return (
    <>

      <div>
        <Notes ShowAlert={props.ShowAlert} />
      </div>
    </>
  )
}
