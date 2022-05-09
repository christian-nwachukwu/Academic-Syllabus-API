const mongoose = require('mongoose');

const SyllabusShema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    date:{
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('syllabus', SyllabusShema);