const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '@Rmtaruc100102',
  database: 'mydatabase',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function connectToDatabase() {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    console.log('Connected to MySQL database');

    // Release the connection
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
}

module.exports = { pool, connectToDatabase };
