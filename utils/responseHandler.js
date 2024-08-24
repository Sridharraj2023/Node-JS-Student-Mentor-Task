//Function to send success response

export const successResponse = (res, data, message = 'Success') => {

    return res.status(200).json({message, data});

};

//Function to send error response

export const errorResponse = (res, error) => {
    return res.status(500).json({
        success: false,
        message: error.message || 'An error occurred',
        error: error
    });

};



