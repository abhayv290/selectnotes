import React from 'react';

function AboutSection() {
  return (
    <div className=" container about-section my-5">
      <h2 className='text-primary'>About Our Notes App</h2>
      <p>
        Welcome to our SelectNotes   App! This app allows you to easily create, edit, and manage your notes.
        It's designed to help you stay organized and keep track of important information.
      </p>
      
        <span className='text-center text-danger'>Features:</span>
        <ul>
          <li>Create and delete notes</li>
          <li>Edit notes with a rich text editor</li>
          <li>Organize notes with categories or tags</li>
          <li>Search and filter notes for easy access</li>
        </ul>
      
      <p>
        We hope you find this app helpful for your note-taking needs. If you have any feedback or
        suggestions, please don't hesitate to reach out to us.
      </p>


      <h2 className='my-4 text-center text-primary'>Frequently Asked Questions (FAQ)</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong> What is the SelectNotes app?</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>A Notes App is a digital tool that allows you to create, store, and manage notes or pieces of information. It helps you organize and retrieve information efficiently.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>  Is  this app is free to use?</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Yes, our Notes App is completely free to use. You can create and manage your notes without any cost.</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Can I Recover Deleted Notes?</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <p>Yes, in most cases, you can recover deleted notes. Check the "Trash" or "Recycle Bin" section within the app to restore deleted notes. Note that some notes may be permanently deleted after a certain period, so it's a good practice to regularly review and restore from the trash if needed.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default AboutSection;
