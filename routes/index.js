var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Video Games Due Too',
      user: req.user
    });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', 
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/videogames',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/auth/google');
};

module.exports = router;