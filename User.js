const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bloodGroup: String,
  city: String,
  phone: String,
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('User', UserSchema);