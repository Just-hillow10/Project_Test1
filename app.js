const express = require('express');
const app = express();
const port = 3000;

const { connectToDatabase } = require('./database'); // Adjust the path based on your project structure

// Set static files directory
app.use(express.static('public'));

// Serve static files from the 'node_modules' directory
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Connect to the database
connectToDatabase();

// Define a route
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about_Us', (req, res) => {
  res.render('about_Us');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contactus', (req, res) => {
  res.render('contactus');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
