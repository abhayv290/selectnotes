import React from 'react'
import Notes from './Notes'


export default function Home() {
  return (
    <>
    <div className="container my-5 border border-primary">

      <h1 className='text-center my-2 text-primary'>Add your Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your title here" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Your description here' rows="3"></textarea>
        </div>
        </form>
      </div>
        <div>
        <Notes/>
        </div>
      </>
  )
}
