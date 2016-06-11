/**
 * Created by Brandon Risberg on 4/30/2016.
 */

var mongoose = require('mongoose');

var schema = mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true},
  watsonResult: { type: String }
});

var Model = mongoose.model('profile', schema);

module.exports = Model;