var mongoose = require('mongoose');
var index_wendu = require('../schemas/index_wendu');

module.exports = mongoose.model('index_wendu',index_wendu);