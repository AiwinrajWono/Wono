const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const promisePool = require('./db')

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors())

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
    const { email, name, mobile, link, country, city, message, password, confirm_password } = req.body;



    try {
        // Insert data into the database
        const [result] = await promisePool.query(
            `INSERT INTO user_data (partnerstype, name, mobile, email, link, country, city, message, password)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [req.body.partnerstype, name, mobile, email, link, country, city, message, password]
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

// Add this to your existing backend code
app.get('/users', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM user_data');
        res.json(rows);
    } catch (error) {
        console.error('Database error:', error.message);
        res.status(500).send('Failed to fetch user details.');
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
