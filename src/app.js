const express = require('express');
const app = express();

const path = require('node:path');
const favicon = require('serve-favicon')

app.use(express.static('public'))
app.use(favicon(path.join(__dirname, '..', 'public','favicon.ico')))


const PORT = process.env.PORT || 3000;

app.listen(PORT, ()  => console.log(`Server up: http://localhost:${PORT}`))

app.get('/',  (req, res)  => res.sendFile(path.join(__dirname,  './views/index.html')))