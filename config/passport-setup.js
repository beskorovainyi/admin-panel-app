const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

// passport.use(
// 	new GoogleStrategy({
// 		//option for the google start
// 		callbackURL: '/auth/google/redirect',
// 		clientID: keys.google.clientID,
// 		clientSecret: keys.google.clientSecret
// 	}, (accessToken, refreshToken, profile, done) => {
// 		//check if user already exists in our db
// 		User.findOne({googleId: profile.id}).then( (currentUser) => {
// 			if(currentUser){
// 				//already have the user
// 				console.log('users is: ', currentUser);
// 			} else {
// 				//if not, create user in our db
// 				new User ({
// 					username: profile.displayName,
// 					googleId: profile.id
// 				}).save().then((newUser) => {
// 			console.log('new user created' + newUser);
// 			})
// 		}
// 		});
// 	})
// )
