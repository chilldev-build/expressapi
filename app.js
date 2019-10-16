const express = require('express');
const compression = require('compression');
const helmet = require('helmet');
const app = express();

app.listen('3333', function() {
    console.log('Listening on port 3333');
});

app.use(compression());
app.use(helmet());

const data = {
    localTrails: [
        {name: "Silver Comet Trail", length: 100},
        {name: "Stone Mountain Trail", length: 30},
        {name: "PATH 400", length: 10}
    ]
};

const rootController = function(req, res) {
    console.log('req', req);
    const snippet = `<h1>Hello World!</h1>`;
    res.status(200).send(snippet).end();
};

app.get('/',rootController);

app.get('/all',function(req, res) {
    let json = {
        data
    }
    res.status(200).send(json).end();
});

//destructuring
app.get('/wp', function(req, res){
    const {name} = req.query;
    const snippet = `<h1>Hello ${name}</h1>`;

    if (!name) {
        const snippet = `<h1>NO NAME PROVIDED!</h1>`
        res.status(500).send(snippet);
        return;
    }
    
    res.status(200).send(snippet);
});