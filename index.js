const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const currentDate = new Date().toLocaleDateString();
  res.send(`Welcome to the Team Playbook! Today's date is ${currentDate}.`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});