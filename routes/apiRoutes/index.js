const router = require('express').Router();
const { notes } = require("../../db/db.json");
const fs = require('fs');
const path = require('path');


router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
});

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();
    const note = req.body;
    notes.push(note);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes: notes }, null, 2));
    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    let id = req.params.id;
    notes.splice(id, 1);
    notes.forEach(note => {note.id = JSON.stringify(notes.indexOf(note))});
    res.json(notes);
});

module.exports = router;