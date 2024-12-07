const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const notesRoutes = require('./routes/notes');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

// Use notes routes
app.use(notesRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
