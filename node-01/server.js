const express = require('express');

const app = express();

app.delete('/user/:id', (req, res) => {
  res.send(`DELETE /user/${req.params.id}`);
});
