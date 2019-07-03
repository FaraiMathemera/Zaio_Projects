const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
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

let User = module.exports = mongoose.model('User', UserSchema);
