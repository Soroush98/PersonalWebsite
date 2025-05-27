const express = require('express');
const nodemailer = require('nodemailer');
const leoProfanity = require('leo-profanity');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
// Parse JSON bodies


app.use(cors({
  origin: 'http://localhost:4200' // or use '*' to allow all, but not recommended for production
}));
app.use(express.json());

app.post('/message', async (req, res) => {
  console.log('Received message:', req.body);
  let { name, email, subject, message } = req.body;

  // Basic sanitization: remove potential JS event attributes and scripts
  function sanitize(input) {
    if (typeof input !== 'string') return '';
    // Remove script tags
    // Remove script tags
    input = input.replace(/<script.*?>.*?<\/script>/gis, '');
    // Remove on* attributes (e.g., onclick, onerror)
    input = input.replace(/on\w+\s*=\s*(['"]).*?\1/gi, '');
    // Remove javascript: in href/src
    input = input.replace(/javascript:/gi, '');
    // Remove all HTML tags
    input = input.replace(/<[^>]*>/g, '');
    // Remove CSS style tags and inline styles
    input = input.replace(/<style.*?>.*?<\/style>/gis, '');
    input = input.replace(/style\s*=\s*(['"]).*?\1/gi, '');
    // Remove suspicious characters/sequences (e.g., backticks, ${}, <, >, &)
    input = input.replace(/[`$<>{}]/g, '');
    // Remove insults using leo-profanity
    input = leoProfanity.clean(input);
    return input;
  }

  name = sanitize(name);
  email = sanitize(email);
  subject = sanitize(subject);
  message = sanitize(message);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Set up your SMTP transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS // Set these in your environment variables
    }
  });

  try {
    await transporter.sendMail({
      from: `"A message was sent from ${name} with Email: " <${email}>`,         // Sender info
      to: 'esmailian98@gmail.com',          // Your email
      subject: subject,
      text: message,
      replyTo: email
    });
    res.json({ success: true, message: 'Email sent successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
