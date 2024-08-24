import Mentor from '../models/mentor.js';

//Service function to create new mentor

export const createMentor = async (mentorData) => {

    const mentor = new Mentor(mentorData);

    return await mentor.save();
};

//Service function to assign the students to mentor

export const assignStudentsToMentor = async (mentorID, studentIDs) => {

    const mentor = await Mentor.findById(mentorID); //Find the mentor by their ID

    mentor.students.push(...studentIDs); // Add the provided student IDs to the mentor's students array

    return await mentor.save(); //Save the updated mentor and save it
};

//Service function to get studnets assigned to particular mentor

export const getStudentsForMentor = async (mentorID) => {

    return await Mentor.findById(mentorID).populate('students');
};



