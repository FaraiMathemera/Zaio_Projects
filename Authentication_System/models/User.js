const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  age: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: false
  },
  favCourse: {
    type: String,
    required: false
  },
  date: {
    type: String,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
