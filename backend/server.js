const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const promisePool = require('./db');

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like Yahoo, Outlook, etc.
    auth: {
        user: 'aiwinraj1810@gmail.com', // Your email
        pass: 'egbu dugk nupf xjry' // Your email password or app password
    }
});

// Route to handle form submission
app.post('/register', async (req, res) => {
    const { email, name, mobile, link, country, city, message, password, partnerstype } = req.body;

    try {
        // Insert data into the database, excluding confirm_password
        const [result] = await promisePool.query(
            `INSERT INTO user_data (partnerstype, name, mobile, email, password, link, country, city, message)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [partnerstype, name, mobile, email, password, link, country, city, message]
        );

        // Email content
        const mailOptions = {
            from: 'aiwinraj1810@gmail.com',
            to: email,
            subject: 'Registration Details',
            html: `
                <html>
                <body>
                    <h2>Registration Details</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Mobile Number:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>LinkedIn Profile:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;"><a href="${link}" target="_blank">${link}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Country:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${country}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>City:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${city}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Personal Message:</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
                        </tr>
                    </table>
                </body>
                </html>
            `
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send('Failed to send email: ' + error.message);
            }
            res.status(200).send('Registration details sent successfully!');
        });

    } catch (error) {
        console.error('Database error:', error.message);
        res.status(500).send('Failed to register user: ' + error.message);
    }
});


// Route to handle user login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const [rows] = await promisePool.query('SELECT * FROM user_data WHERE email = ? AND password = ?', [email, password]);

        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const user = rows[0];
        res.json({ user: { id: user.id, email: user.email } });
    } catch (error) {
        console.error('Error in /login:', error); // Add this for better error tracking
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to fetch all users
app.get('/users', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM user_data');
        res.json(rows);
    } catch (error) {
        console.error('Database error:', error.message);
        res.status(500).send('Failed to fetch user details.');
    }
});

// Route to check if an email is already registered
app.get('/check-email', async (req, res) => {
    const email = req.query.email;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Query to check if email exists in the database
        const [rows] = await promisePool.query('SELECT COUNT(*) AS count FROM user_data WHERE email = ?', [email]);
        const isDuplicate = rows[0].count > 0;

        res.status(200).json({ isDuplicate });
    } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
