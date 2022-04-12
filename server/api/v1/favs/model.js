const mongoose = require('mongoose');

const { Schema } = mongoose;

const fields = {
  title: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  link: {
    type: String,
    required: true,
  },
};

const fav = new Schema(fields, {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('fav', fav),
  fields,
};
