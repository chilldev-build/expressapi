const express = require('express'),
    compression = require('compression'),
    helmet = require('helmet'),
    app = express();

app.listen('3333', function() {
    console.log('Listening on port 3333');
});

app.use(compression());
app.use(helmet());

const rootController = require('./routes/index');
const allController = require('./routes/all');
const wpController = require('./routes/wp');
const personController = require('./routes/person');



app.use('/',rootController);
app.use('/all',allController);
app.use('/wp', wpController);
app.use('/person', personController);