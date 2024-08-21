const mongoose = require('mongoose');


// Student Schema

const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    mentor: [{type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', default: null}],
});

// Creating a model from the schema to interact with the Mentor collection in MongoDB

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;