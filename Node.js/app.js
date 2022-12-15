const express = require('express')
const path = require("path");
const fs = require('fs')

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
let timetable_html;
fs.readFile('./static/timetable.html', 'utf8', function(err, data){
    // Display the file content
    timetable_html = data
});
app.get('/', function(req, res, next) {
    res.render('index', { title: 'Timetable', timetable: timetable_html});
});

app.listen(3000, () => {
    console.log('Server started: http://localhost:3000')
})