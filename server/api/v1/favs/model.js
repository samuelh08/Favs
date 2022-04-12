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

const references = {
  userId: {
    type: mongoose.ObjectId,
    ref: 'user',
    required: true,
  },
};

const fav = new Schema(Object.assign(fields, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('fav', fav),
  fields,
  references,
};
