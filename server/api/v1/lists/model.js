const mongoose = require('mongoose');

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    trim: true,
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

const list = new Schema(Object.assign(fields, references), {
  timestamps: true,
  toJSON: {
    virtuals: true,
  },
});

const virtuals = {
  favs: {
    ref: 'fav',
    localField: '_id',
    foreignField: 'listId',
  },
};

list.virtual('favs', virtuals.favs);

module.exports = {
  Model: mongoose.model('list', list),
  fields,
  references,
  virtuals,
};
