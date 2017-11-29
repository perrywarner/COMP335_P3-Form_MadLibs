var express = require('express');
var router = express.Router();

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

router.get('/madlibsOutput', function(req, res) {
    res.render('madlibsOutput', {
    	
    });
});

// http://localhost:3000/session
router.get('/session', function(req, res) {
  // HTTP request has a session object
  var sess = req.session;
  // create a javascript variable views
  if (sess.views) {
    sess.views++;
  } else {
    // initialize the new variable to 1
    sess.views = 1;
  }
  // views/session.hbs
  res.render('session', {
    title: 'Counting session',
    //session.views ==1 
    views: sess.views,
    dates: moment().format('MMMM Do YYYY, h:mm:ss a')
  });
});

module.exports = router;