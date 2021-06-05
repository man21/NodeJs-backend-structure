const mongoose = require('mongoose')

var user = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },  
    isActive: {
      type: Boolean,
      default: true
    },
    lastLogin: {
      type: Date
    },
    createdAt: {
      type: Date,
      default: new Date()
    },
    updatedAt: {
      type: Date,
      default: new Date()
    }
  })
  module.exports = mongoose.model('users', user, "users",);
  