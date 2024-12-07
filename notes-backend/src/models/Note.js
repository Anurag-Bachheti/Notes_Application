// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  data: { type: String, required: true }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
