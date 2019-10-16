const express = require('express'),
    router = express.Router();


router.get('/', (req, res) => {
    const snippet = `<h1>Hello World!</h1>`;
    res.status(200)
        .render('template', {
            locals: {
                title: "Welcome!"
            },
            partials: {
                partial: "partial-index"
            }
        })
        //.end();
});

module.exports = router;
