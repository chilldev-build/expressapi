const express = require('express'),
    router = express.Router();


const data = {
    localTrails: [
        {name: "Silver Comet Trail", length: 100},
        {name: "Stone Mountain Trail", length: 30},
        {name: "PATH 400", length: 10}
    ]
};

router.get('/', (req, res) => {
    let json = {
        data
    }
    
    res.status(200)
    .render('template', {
        locals: {
            title: "A list of trails",
            arrayOfData: data.localTrails
        },
        partials: {
            partial: "partial-all"
        }
    })
    //.end();
});

module.exports = router;

