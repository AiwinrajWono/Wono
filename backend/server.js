const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const promisePool = require("./db");;
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(cors());

// Setup Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like Yahoo, Outlook, etc.
  auth: {
    user: "aiwinraj1810@gmail.com", // Your email
    pass: "egbu dugk nupf xjry", // Your email password or app password
  },
});




// Route to handle form submission
app.post("/register", async (req, res) => {
  const {
    email,
    name,
    mobile,
    link,
    country,
    city,
    message,
    password,
    partnerstype,
  } = req.body;

  try {
    // Insert data into the database, excluding confirm_password
    const [result] = await promisePool.query(
      `INSERT INTO user_data (partnerstype, name, mobile, email, password, link, country, city, message)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        partnerstype,
        name,
        mobile,
        email,
        password,
        link,
        country,
        city,
        message,
      ]
    );

    // Email content
    const mailOptions = {
      from: "aiwinraj1810@gmail.com",
      to: email,
      subject: "Registration Details",
      html: `
               <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Email Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; -webkit-text-size-adjust: none; -ms-text-size-adjust: none;">
    <div style="width: 100%; max-width: 600px; background-color: #ffffff; margin: 20px auto; padding: 2rem; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #daf5fe; padding: 1rem; text-align: center; border-radius: 1rem;">
            <h1 style="font-size: 2rem; text-align: center; margin: 0; padding-bottom: 20px;">
                C<b style="color: #0d6efd;">o</b>ngratula<b style="color: #0d6efd;">o</b>ns! Y<b style="color: #0d6efd;">o</b>ur acc<b style="color: #0d6efd;">o</b>unt has been activated
            </h1>
        </div>
       
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Name:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Mobile Number:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${mobile}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Email:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${email}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>LinkedIn Profile:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><a href="${link}" target="_blank" style="color: #0d6efd;">${link}</a></td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Country:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${country}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>City:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${city}</td>
            </tr>
            <tr>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;"><strong>Personal Message:</strong></td>
                <td style="padding: 12px; border-bottom: 1px solid #ddd; font-size: 14px;">${message}</td>
            </tr>
        </table>
        <a href="#" style="background-color: #000; color: #fff; border: none; border-radius: 10px; padding: 0.75rem; font-size: 1.5rem; width: 100%; display: inline-block; text-align: center; cursor: pointer; margin-top: 20px; font-family: 'Poppins', sans-serif; font-weight: 600; text-decoration: none;">Log-in</a>
    </div>
</body>
</html>

            `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send("Failed to send email: " + error.message);
      }
      res.status(200).send("Registration details sent successfully!");
    });
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Failed to register user: " + error.message);
  }
});

// Route to handle user login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const [rows] = await promisePool.query(
      "SELECT * FROM user_data WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];
    res.json({ user: { id: user.id, email: user.email } });
  } catch (error) {
    console.error("Error in /login:", error); // Add this for better error tracking
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to fetch all users
app.get("/users", async (req, res) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM user_data");
    res.json(rows);
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).send("Failed to fetch user details.");
  }
});

// Route to check if an email is already registered
app.get("/check-email", async (req, res) => {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Query to check if email exists in the database
    const [rows] = await promisePool.query(
      "SELECT COUNT(*) AS count FROM user_data WHERE email = ?",
      [email]
    );
    const isDuplicate = rows[0].count > 0;

    res.status(200).json({ isDuplicate });
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
