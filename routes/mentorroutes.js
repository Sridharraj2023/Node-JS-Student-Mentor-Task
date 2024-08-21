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