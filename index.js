const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const logger = require('./middleware/logger')
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();


// Init Middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Add Bodyparser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Homepage Route
app.get('/', (req, res) => res.render('index', {
  title: 'Members App',
  members
}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on ${PORT}`));











