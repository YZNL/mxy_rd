var mongoose=require('mongoose');
//用户表结构
module.exports = new mongoose.Schema({
    date: {
        type: Date,
        default: new Date()
    },
    time: {
        type: String,
        default: ''
    },
    hum: {
        type: Array,
        default: ''
    }
})