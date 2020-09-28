const express = require('express');
// const ejs = require('ejs');

const app = express();

const port = 3000;

app.use(express.static('styles'));

app.set('view engine', 'ejs');
app.set('views', 'components');

app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

app.get('/science', (req, res) => {
     res.render('science', { title: 'Science'});
});

app.get('/history', (req, res) => {
   res.render('history', { title: 'History'});
});

app.get('/computer', (req, res) => {
    res.render('computer', { title: 'Computer'});
});

app.listen(port, () => {
    console.log(`The server is listening on port ${port}`);
});