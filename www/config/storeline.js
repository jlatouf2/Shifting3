// user model
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Storeline = new Schema({
	post_id: String,
	line: String,
	store: String,
  Adminpassword: String,

});

module.exports = mongoose.model('storeline', Storeline);
