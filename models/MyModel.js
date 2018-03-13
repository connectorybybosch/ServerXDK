const mongoose = require('mongoose');

let myModelSchema = new mongoose.Schema({
  status: {
    type:Boolean,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

let MyModel = mongoose.model('MyModel',myModelSchema);
module.exports = MyModel;
