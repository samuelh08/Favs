const mongoose = require('mongoose');

const fields = {
  title: String,
  description: String,
  link: String,
};

module.exports = mongoose.model('fav', fields);
