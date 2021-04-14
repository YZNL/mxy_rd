var mongoose = require('mongoose');
var hold = require('../schemas/hold');

module.exports = mongoose.model('hold', hold);