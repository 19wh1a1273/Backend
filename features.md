# Backend Features Implemented

1. **Serve files to the client**
   - Configured Express to serve static files from the React frontend in production mode
   - Set up proper routing to serve the React app

2. **Manipulate data in a database**
   - Implemented MongoDB Atlas connection
   - Created API endpoint to store contact form submissions in the database
   - Used native MongoDB driver (without Mongoose)

3. **Contact Form Submission**
   - Created a RESTful API endpoint for contact form submissions
   - Implemented server-side validation for required fields
   - Stored submissions with timestamps in MongoDB

## Database Access
- MongoDB Atlas is cloud-hosted
- Database is accessible from any IP address (0.0.0.0/0)
- Using public API key stored in environment variables