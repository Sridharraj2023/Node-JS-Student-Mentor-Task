import express from 'express'
import {createStudent, assignMentorToStudent, getMentorForStudent} from '../services/studentservices.js'
import {successResponse, errorResponse} from '../utils/responseHandler.js'
import Student from '../models/student.js';


router = express.Router();

//Route to crate a new student

router.post('/', async(req, res)=> {

    try {

    const student = await createStudent(req.body);
    return successResponse(res, student, 'Student created successfully');
        
    } catch (error) {

        return errorResponse(res, error);        
    }
    
})

