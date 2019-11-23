var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/play', function(req, res, next) {
  //res.render('index', { title: 'PLAYING' });
  console.log('play request received')
})

router.get('/pause', function(req, res, next) {
  //res.render('index', { title: 'PAUSED' });
  console.log('pause request received')
})

router.post('/shiftSlider', function(req,res,next) {
  console.log('shiftSlider received')
})

router.post('/connect', function (req, res, next) {
  console.log('connect intialized')
})

router.post('/disconnect', function (req, res, next) {
  console.log('disconnect insitialzed')
})

module.exports = router; 
