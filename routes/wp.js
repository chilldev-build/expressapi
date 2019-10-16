const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    const {name} = req.query;
    const snippet = `<h1>Hello ${name}</h1>`;
    
    if (!name) {
        const snippet = `<h1>NO NAME PROVIDED!</h1>`
        res.status(500).send(snippet);
        return;
    }

    res.status(200)
        .send(snippet)
        .end();
});

module.exports = router;


