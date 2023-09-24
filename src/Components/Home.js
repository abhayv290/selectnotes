import React from 'react'
// import Notes from './Notes'

export default function Home() {
  return (
    <div className="container my-5 border border-primary">

      <h1 className='text-center my-2 text-primary'>Add your Notes</h1>
      <form>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="your title here" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Your description here' rows="3"></textarea>
        </div>
        </form>
        <div>
          {/* <Notes/> */}
        </div>
    </div>
  )
}
