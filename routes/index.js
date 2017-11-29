var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// http://localhost:3000/formHandler
router.get('/formHandler', function(req, res) {
    res.render('form');
});

router.post('/formHandler', function(req, res) {

    res.render('form', req.body);

});

router.get('/madlibs', function(req, res) {
    res.render('madlibs');
});

router.post('/madlibsHandler', function(req, res) {
    res.render('madlibsOutput', req.body);
});



// router.get('/madlibsOutput', function(req, res) {
//     res.render('madlibsOutput', {
    	
//     });
// });


module.exports = router;