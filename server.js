const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// POST /send-email
app.post('/send-email', async (req, res) => {
  const { email } = req.body;

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'callumanderson000@gmail.com',        // your email
      pass: 'yzsd pqvr ipcv bebv',     // app password from Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: "callumanderson000@gmail.com",
      to: email, // where you want to receive messages
      subject: "Subscription Confirmation",
      text: "WELCOME 2 SEYMOUR",
    });

    res.status(200).json({ success: true, message: 'Email sent' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Email failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
