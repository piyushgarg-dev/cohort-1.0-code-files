const express = require('express');

const app = express();

app.use((req, res, next) => {
  next();
});

app.get('/', (req, res) => res.end('Homepage'));
app.get('/contact-us', (req, res) => res.end('Contact Us Page'));
app.get('/about-us', (req, res) => res.end('About Us Page'));

app.listen(8000, function () {
  console.log(`Server Started`);
});

// http module
// Can you create a basic express
// GET and POST

// req.method and req.url (node) | Magical Layer
// 100 - 30%
const c = require('cohortjs');

c.getCallPr('/', function () {});

c.suno(8000).aurPhir(() => console.log());
