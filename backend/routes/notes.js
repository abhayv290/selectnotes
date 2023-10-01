const express = require('express');
const router = express.Router();
const Notes = require('../Models/notes');
const fetchUser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
// Route: 1 -gET all the notes of related user using GET: /api/notes/fetchnotes : Login required

router.get('/fetchnotes', fetchUser, async (req, res, next) => {
    try {
        const notes = await Notes.find({ user: req.User.id });
        res.send(notes);

    } catch (error) {
        console.log(error);
        res.status(404).send('Content NOt Found')
    }

});


//Route 2: For adding the notes as per the User on POST: /api/notes/addnotes ; Login REquired

router.post('/addnotes', fetchUser, [
    body('title', 'Enter a valid title').isLength({ min: 1 }),
    body('description', 'description must be atleast 8 character').isLength({ min: 8 })], async (req, res) => {

        try {  // Using try catch for error handling 

            // check for validation for the notes if it availabe
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(404).json({ error: error.array() })
            }

            //Creation of New Notes

            const { title, description, tag } = req.body;

            const note = new Notes({
                title, description, tag, user: req.User.id
            })
            const savedNote = await note.save();
            res.send(savedNote);
        } catch (error) {
            console.log(error.message);
            res.status(404).send('Content Not Found');

        }

    });


// Route:3  - Updating the notes as per the user preferences using PUT: .api/notes/update: login required

router.put(`/updatenotes/:id`, fetchUser, async (req, res) => {

    try {  // Using try catch for error handling 
        const { title, description, tag } = req.body;
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };



        //find the note for updation
        let note = await Notes.findById(req.params.id)
        if (!note) {
            res.status(404).send('Not Found')
        }
        // to check the respected note is belongs to the user or not 
        if (note.user.toString() !== req.User.id) {
            res.status(401).send('Not allowed')
        }
        //Update the note
        else {
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });

            res.json({ note });
        }

    } catch (error) {
        console.log(error);
        res.status(404).send('Content Not Found');
    }

});






// Route:4  - Deleting  the notes as per the user preferences using DELETE: .api/notes/deletenote: login required

router.delete('/deletenote/:id', fetchUser, async (req, res) => {

    try {  // Using try catch for error handling 

        //find the note for Deletion
        let note = await Notes.findById(req.params.id);
        if (!note) {
            res.status(404).send('Not Found')
        }
        //To check the note is belongs to user or not
        if (note.user.toString() !== req.User.id) {
            res.status(401).send('Not allowed')
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ success: "Note has been deleted" });
    } catch (error) {
        console.log(error);
        res.status(404).send('Content Not Found');
    }

});

module.exports = router













