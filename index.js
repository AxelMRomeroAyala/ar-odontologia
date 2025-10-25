const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve all static assets from the repo root
app.use(express.static(__dirname));

// Fallback to index.html for unknown routes (useful if links omit .html)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

