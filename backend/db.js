const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'anushri.bhagat263', // Replace with your MySQL password
    database: 'Application_form', // Your database name
    connectionLimit: 10
});

// Promisify for Node.js async/await.
const promisePool = pool.promise();

console.log('Connected to MySQL database!');

module.exports = promisePool;
