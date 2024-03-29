var express = require('express');
var router = express.Router();
var axios = require('axios')
var fetch = require('node-fetch')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/play', function(req, res, next) {
  //res.render('index', { title: 'PLAYING' });
  console.log('play request received')
  var data;
  fs.readFile('public/data/appState.json', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    data = JSON.parse(data)
    data.playing = true
    data = JSON.stringify(data)
    fs.writeFile('public/data/appState.json', data, 'utf8', function(err) {
      if (err) return console.log(err);
    })
  })
})

router.post('/pause', function(req, res, next) {
  //res.render('index', { title: 'PAUSED' });
  console.log('pause request received')
  var data;
  fs.readFile('public/data/appState.json', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    data = JSON.parse(data)
    data.playing = req.body.playbackState
    data.currentTime = req.body.playbackTime
    data.sliderHead = req.body.playbackTime
    data = JSON.stringify(data)
    fs.writeFile('public/data/appState.json', data, 'utf8', function(err) {
      if (err) return console.log(err);
    })
  })
})

router.post('/shiftSlider', function(req,res,next) {
  fs.readFile('public/data/appState.json', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    data = JSON.parse(data)
    data.sliderHead = req.body.playbackTime
    data.currentTime = req.body.playbackTime
    data.playing = true
    data = JSON.stringify(data)
    fs.writeFile('public/data/appState.json', data, 'utf8', function(err) {
      if (err) return console.log(err);
    })
  })
})

router.get('/getState', function(req, res, next) {
  fs.readFile('public/data/appState.json', 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    data = JSON.parse(data)
    res.send(data)
  })
})

router.post('/connect', function (req, res, next) {
  console.log('connect intialized')
})

router.post('/disconnect', function (req, res, next) {
  console.log('disconnect insitialzed')
})

module.exports = router; 
