import mongoose from 'mongoose';


// Mentor Schema

const mentorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
});

// Creating a model from the schema to interact with the Mentor collection in MongoDB

 const Mentor = mongoose.model('Mentor', mentorSchema);

 export default Mentor;



