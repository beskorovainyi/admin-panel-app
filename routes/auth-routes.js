const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/login', (req, res) => {
	res.render('login');
});

// auth with logout
router.get('/logout', (req, res) => {
	res.send('loggin out');
});

// auth with google
router.get('/google', passport.authenticate('google', {
	scope:['profile']
}));

//callback router for google to redirect to
router.get('/google/redirect', passport.authenticate('google'),(req, res) => {
	res.send('You reached the callback URL')
});


module.exports = router;