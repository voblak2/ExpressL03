var express = require('express');
var router = express.Router();
var storySections =require('../models/storyLine')

/* GET home page. */
router.get('/beginning', function(req, res, next) {
  let beginning = storySections.storyLine.find((story) => {
    return story.storyPart === 'beginning'
  })

  res.render('beginning', { beginning })
})

router.get('/middle', function(req, res, next) {
  let middle = storySections.storyLine.find((story) => {
    return story.storyPart === 'middle'
  })

  res.render('middle', { middle })
})

router.get('/end', function(req, res, next) {
  let end = storySections.storyLine.find((story) => {
    return story.storyPart === 'end'
  })

  res.render('end', { end })
})

module.exports = router
