var mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({},{
    timestamps: true
});

module.exports = mongoose.model('Room',roomSchema);