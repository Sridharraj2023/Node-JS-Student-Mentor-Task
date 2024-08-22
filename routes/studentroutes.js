import express from 'express'
import {createStudent, assignMentorToStudent, getMentorForStudent} from '../services/studentservices.js'
import {successResponse, errorResponse} from '../utils/responseHandler.js'

router = express.Router();

// Route to create a new student
router.post('/', async (req, res) => {
    try {
        const student = await createStudent(req.body); // Call the service function to create a student
        return successResponse(res, student, 'Student created successfully'); // Return a success response
    } catch (error) {
        return errorResponse(res, error); // Return an error response if something goes wrong
    }
});

// Route to assign a mentor to a student
router.put('/:id/mentor', async (req, res) => {
    try {
        const student = await assignMentorToStudent(req.params.id, req.body.mentorId); // Call the service function to assign a mentor
        return successResponse(res, student, 'Mentor assigned to student successfully'); // Return a success response
    } catch (error) {
        return errorResponse(res, error); // Return an error response if something goes wrong
    }
});

// Route to get the mentor assigned to a student
router.get('/:id/mentor', async (req, res) => {
    try {
        const student = await getMentorForStudent(req.params.id); // Call the service function to get the mentor
        return successResponse(res, student, 'Mentor retrieved successfully'); // Return a success response
    } catch (error) {
        return errorResponse(res, error); // Return an error response if something goes wrong
    }
});

// Exporting the router to be used in other parts of the application
module.exports = router;