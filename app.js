const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');

const chalk = require('chalk');

app.set('view engine', 'ejs');

//set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
	res.render('home');
});

const server = app.listen(port, (error) => {
    if (error) return (
        console.log(`Error: ${error}`)
    )
    console.log(chalk.green(`Server listening on port ${server.address().port}`));
});