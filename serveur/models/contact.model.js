//import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

  const contactSchema = new Schema({
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    telephone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      maxlength: 1024
    },
  });

  module.exports = mongoose.model('contact', contactSchema);