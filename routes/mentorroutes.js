import express from 'express'
import {createMentor, assignStudentsToMentor, getStudentsForMentor} from '../services/mentorservices.js'
import {successResponse, errorResponse} from '../utils/responseHandler.js'

const router = express.Router();

//Route to create mentor

router.post('/', async (req, res) => {
    try {

        const mentor = createMentor(req.body);

        return successResponse(res, mentor, 'Mentor created successfully');
        
    } catch (error) {

        return errorResponse(res, error);
        
    }
});

//Route to assign students to mentor

router.post('/:id/students', async(req, res)=> {
    try {

        const mentor = await assignStudentsToMentor(req.params.id, req.body.studentIds);
        return successResponse(res, mentor, 'Students assigned to mentor successfully');
        
    } catch (error) {

        return errorResponse(res, error);
        
    }
});

//Route to get all students assigned to a mentor

router.get('/:id/students', async (req, res) => {

    try {

        const students = await getStudentsForMentor(req.params.id);
        return successResponse(req, students, 'Students retrived successfully');
        
    } catch (error) {

        return errorResponse(res, error);
        
    }
});

module.exports = router;