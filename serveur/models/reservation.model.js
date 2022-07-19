
const mongoose = require('mongoose');
const { Schema } = mongoose;

  const reservationSchema = new Schema({
    identiter: {
      type: String,
      required: true
    },
    telephone: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    date: {
      type: String,
      required: true
    },
    horaire: {
      type: String,
      required: true
    },
    services: {
      type: String,
      required: true
    },
    localisation: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    }
  });

  module.exports = mongoose.model('reservation', reservationSchema);