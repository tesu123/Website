const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email sending route
app.post("/send-email", async (req, res) => {
  const { name, email, mobile, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ajdas123.ff@gmail.com", // Replace with your Gmail address
      pass: "dedb cgwf zhas wwho", // Replace with your Gmail password or app-specific password
    },
  });

  const mailOptions = {
    from: email,
    to: "ajdas123.ff@gmail.com", // Replace with your recipient email
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send email.");
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});