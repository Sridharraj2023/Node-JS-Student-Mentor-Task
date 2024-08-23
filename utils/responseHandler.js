//Function to send success response

export const successResponse = (res, data, message = 'Success') => {

    return res.status(200).json({message, data});

};

//Function to send error response

export const errorResponse = (res, error, statusCode = 400) => {

    return res.status(statusCode).json({message: error.message});

};



