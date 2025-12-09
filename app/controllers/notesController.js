const notes = require('../models/notesData'); 
exports.getNotes = (req, res) => {
    const { search } = req.query;

    if (search) {
       
        const filteredNotes = notes.filter(note => 
            note.text.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filteredNotes);
    }
    res.json(notes);
};

exports.addNote = (req, res) => {
    const {text } = req.body;
    if (!text){
        return res.status(400).send('текст напишите');
    }
    const newNote = {
        id: notes.length + 1,
        text: text,
        date: new Date().toISOString().split('T')[0]
    };
    notes.push(newNote);
    res.status(201).json(newNote);
    
};