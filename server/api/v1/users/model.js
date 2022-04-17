const mongoose = require('mongoose');
const { hash, compare } = require('bcryptjs');

const { Schema } = mongoose;

const fields = {
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
};

const user = new Schema(fields, {
  timestamps: true,
});

const hiddenFields = ['password'];

user.methods.toJSON = function hideFields() {
  const doc = this.toObject();
  hiddenFields.forEach((field) => {
    delete doc[field];
  });
  return doc;
};

user.pre('save', async function encryptPassword(next) {
  if (this.isNew || this.isModified('password')) {
    this.password = await hash(this.password, 10);
  }
  next();
});

user.methods.verifyPassword = function verifyPassword(value) {
  return compare(value, this.password);
};

module.exports = {
  Model: mongoose.model('user', user),
  fields,
};
