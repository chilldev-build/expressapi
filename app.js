const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    compression = require('compression'),
    helmet = require('helmet'),
    app = express();

app.listen('3333', function() {
    console.log('Listening on port 3333');
});

app.use(compression());
app.use(helmet());

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const rootController = require('./routes/index');
const allController = require('./routes/all');
const wpController = require('./routes/wp');
const personController = require('./routes/person');



app.use('/',rootController);
app.use('/all',allController);
app.use('/wp', wpController);
app.use('/person', personController);