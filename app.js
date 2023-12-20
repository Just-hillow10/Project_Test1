const express = require('express');
const app = express();
const port = 3000;

// Set static files directory
app.use(express.static('public'));

// Serve static files from the 'node_modules' directory
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
