const mongoose = require('mongoose');

const mailSchema = new mongoose.Schema({
  receiver: Array,
  cc: Array,
  bcc: Array,
  subject: String,
  message: String,
  createdAt: Date
});

const Mail = mongoose.model('Mail', mailSchema);

module.exports = Mail;