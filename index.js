const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars');

const app = express();


// Init Middleware
// app.use(logger);

// Add Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Handlebars Middleware
//TODO: 59:40


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`));











