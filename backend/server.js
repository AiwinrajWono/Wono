const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mysql = require('mysql2');

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
app.post('/register', (req, res) => {
    const { email, name, mobile, link, country, city, message } = req.body;

    // Email content
    const mailOptions = {
        from: 'your-email@gmail.com',
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
});

//Apply form sending email 

const transport = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'anushri.bhagat263@gmail.com',
        pass:'xwhn rrhx ldba vvfx'
    }
});

app.post('/send-email', (req,res) =>{
    const {jobTitle,name,email,date,number,location,experience,linkedInProfile,resume,monthlySalary,expectedSalary,
        daysToJoin,relocateGoa,personality,skills,specialexperience,willing,message} = req.body;

        //Apply form email content
        const Mailoption = {
            from:'anushri.bhagat263@gmail.com',
            to:email,
            subject:`Job Application: ${name} - ${jobTitle}`,
            html:`<div >
  <form action="action_page.php">
  
  <span>Job Position:${jobTitle}</span><br/>
  <span>Name:${name}</span><br/>
  <span>Date of Birth:${date}</span><br/>
  <span>Email:<a href="${email}">${email}</a></span><br/>
  
  <span>Mobile Number:${number}</span><br/>
  <span>Location:${location}</span><br/>
  <span>Experience(in years):${experience}</span><br/>
  <span>Linkedin Profile Url:<a href="${linkedInProfile}">${linkedInProfile}</a></span><br/>
  <span>Message:${message}</span><br/>
  <span>${personality}</span><br/>
  <span>Resume:<a href="${resume}">${resume}</a></span><br/>
  
  </form>
</div>`
        };

        transport.sendMail(Mailoption,(error,info)=>{
            if(error){
                return res.status(500).send('Failed to send Email',+ error.message);
            }
            res.status(200).send('Application details have been sent');

        });
});

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"anushri.bhagat263",
  database:"Application_form",
})

db.connect((err)=>{
  if(err)
  {
    console.log('Error connecting to the database');
    return;
  }
 console.log('Connected to mysql database');
})

app.post('/submit-form',(req,res)=>{
  const {jobTitle,name,email ,date,number,location,experience,linkedInProfile,resume,monthlySalary,expectedSalary,
    daysToJoin,relocateGoa,personality,skills,specialexperience,willing,message} = req.body;

    const query = `INSERT into Application_form.apply_form (jobTitle,namee,email,application_date,PhoneNumber,location,
    experience,linkedInProfile,resumelink,monthlySalary,expectedSalary,daysToJoin,relocateGoa,personality,
    skills,specialexperience,willing,message
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

    db.query(query,[jobTitle,name,email,date,number,location,experience,linkedInProfile,resume,
      monthlySalary,expectedSalary,daysToJoin,relocateGoa,personality,skills,specialexperience,willing,
      message
    ],(err,result)=>{
      if(err)
      {
        console.log('Error saving data', err);
        res.status(500).send('Error saving data');
        return;
      }
      res.status(200).send('Data saved successfully');
    });

  
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
