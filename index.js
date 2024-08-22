// Import necessary modules
import express from 'express';  // Importing the express module to create an Express application
import dotenv from 'dotenv';  // Importing the dotenv module to load environment variables from a .env file
import mongoose from 'mongoose';  // Importing the mongoose module for MongoDB interaction

// Importing routes
import studentRoutes from './routes/studentroutes.js';  // Importing student routes from the studentRoutes.js file
import mentorRoutes from './routes/mentorroutes.js';  // Importing mentor routes from the mentorRoutes.js file

// Initialize the app
dotenv.config();  // Load environment variables from a .env file into process.env
const app = express();  // Create an instance of an Express application

// Middleware
app.use(express.json());  // Middleware to parse JSON bodies in incoming requests

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {  // Connect to MongoDB using the connection string from the .env file
  useNewUrlParser: true,  // Use the new MongoDB connection string parser
  useUnifiedTopology: true  // Use the new topology engine for MongoDB connections
})
  .then(() => console.log('Connected to MongoDB'))  // Log success message on successful connection
  .catch((error) => console.error('Error connecting to MongoDB:', error));  // Log error message if connection fails

// Routes
app.use('/api/students', studentRoutes);  // Use student routes for handling requests to /api/students
app.use('/api/mentors', mentorRoutes);  // Use mentor routes for handling requests to /api/mentors

// Start the server
const PORT = process.env.PORT || 5000;  // Define the port from environment variables or use 5000 as a default
app.listen(PORT, () => {  // Start the server on the specified port
  console.log(`Server running on port ${PORT}`);  // Log message indicating the server is running
});

