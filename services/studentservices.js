import Student from "../models/student.js";

//Service function to create a new student 

export const createStudent = async (studentData) => {
    const student = new Student(studentData);
    return await student.save();
};

//Service function to assign mentor to student

export const assignMentorToStudent = async (studentId, mentorId) => {

    const student = await Student.findById(studentId); //Find the student by their ID

    student.mentor = mentorId; //Assign the provided mentor ID to the student's mentor field

    return await student.save(); //Save the updated student and returned it
};

//Service functin to get the mentor assigned to a particular student


export const getMentorForStudent = async (studentId) => {

    return await Student.findById(studentId).populate('mentor');

};






