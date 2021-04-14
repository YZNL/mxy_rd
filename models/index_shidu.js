var mongoose = require('mongoose');
var index_shidu = require('../schemas/index_shidu');

module.exports = mongoose.model('index_shidu',index_shidu);