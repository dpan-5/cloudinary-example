const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = mongoose.model(
    'Image',
    mongoose.Schema({
      imageUrl: String
    })
  );

  module.exports = Image; 