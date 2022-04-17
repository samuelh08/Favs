const mongoose = require('mongoose');
const { hash, compare } = require('bcryptjs');
const { isEmail } = require('validator');

const { Schema } = mongoose;

const fields = {
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator(value) {
        return isEmail(value);
      },
      message(props) {
        return `${props.value} is not a valid email`;
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
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
