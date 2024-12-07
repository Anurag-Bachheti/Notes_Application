const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

// Get all notes
router.get('/notes', async (req, res) => {
  try {
    const foundNotes = await Note.find({});
    res.status(200).json(foundNotes);
  } catch (err) {
    console.error("Error occurred while fetching notes:", err);
    res.status(500).send("Some error occurred!");
  }
});

// Add a new note
router.post('/notes', async (req, res) => {
  const { text } = req.body;
  const { number } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const newNote = new Note({
      number: number,
      data: text,
    });
    await newNote.save();
    res.status(201).json({ message: 'Note added successfully', newNote });
  } catch (err) {
    console.error("Error occurred while adding a note:", err);
    res.status(500).send("Some error occurred!");
  }
});

// Update a note
router.put('/notes/:_id', async (req, res) => {
  const { _id } = req.params;
  const { data, number } = req.body;

  if (!data) {
    return res.status(400).json({ error: 'Data is required' });
  }

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      _id,
      { data, number },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json({ message: 'Note updated successfully', updatedNote });
  } catch (err) {
    console.error("Error updating note:", err);
    res.status(500).json({ error: 'Failed to update note' });
  }
});


// Delete a note
router.delete('/notes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully', deletedNote });
  } catch (err) {
    console.error("Error deleting note:", err);
    res.status(500).json({ error: 'Failed to delete note' });
  }
});

module.exports = router;
