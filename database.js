const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'YOUR_CONNECTION_STRING'; // Replace with your actual MongoDB connection string

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the database
const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

// Export the client and the connectToDatabase function
module.exports = { client, connectToDatabase };
