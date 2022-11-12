const router = require('express').Router();
const {createNewNote, updateDB} = require("../../lib/notes");
const { v4: uuidv4 } = require('uuid');
const {notes} = require("../../db/db.json");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = uuidv4();
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});

router.delete(".notes/:id", (req, res) => {
    const params = req.params.id;
    updateDB(params, notes);
    res.redirect('');
});

module.exports = router;