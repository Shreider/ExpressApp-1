//IMPORTS
const express = require('express');
const app = express();

//ROUTES
const indexRouter = require('./routes/index.js');
const videosRouter = require('./routes/videos.js');

//SETS
app.set('view engine', 'ejs');

//USES
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/videos', videosRouter);

//VARIABLES
const server_port = 2137;

app.listen(server_port, () => console.log(`Server listening on ${server_port} port.`));