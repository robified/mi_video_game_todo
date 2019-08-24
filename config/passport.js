var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var User = require('../models/user');

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function(accessToken, refreshToken, profile, cb) {
        // a user has logged in with OAuth...
        User.findOne({googleId: profile.id}, function(err, student) {
            if(err) return cb(err);
            if (User) {
                cb(null, User);
                
            } else {
                // We have a first-time user via OAuth!
                var newUser = new User({
                    name: profile.displayName,
                    googleId: profile.googleId
                });
                newUser.save(function(err) {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });
    }
));

