# User Form Project

User Form Project is a web application that allows users to submit their information via a form. The backend processes the form data, saves it to a database, and supports retrieving and displaying the stored user information.

## Features

- Frontend built with jQuery.
- Submit user information, including uploading an image.
- Backend APIs to save and retrieve user data.
- Form validation and error handling.
- Displays a list of submitted users.

## Prerequisites

- .NET SDK 8.0 or later
- SQL Server or any other configured database

## Configuration

Ensure you have the correct settings in your `appsettings.json` file for the backend project.

## Running the Application

1. **Clone the Repository**:  
   Clone the repository to your local machine.
   
2. **Build and Run the Backend**:  
   Navigate to the backend project directory and run the application.
   
3. **Run the Frontend**:  
   Open the `index.html` file in your browser to use the frontend.

## API Usage

The backend provides the following APIs:

- **POST /api/user**: Submit a new user form with the data.
- **GET /api/user**: Retrieve all submitted users.
- **GET /api/user/{id}**: Retrieve a user by ID.

## Testing with `index.html`

The `index.html` file in the `wwwroot` folder serves as a simple frontend to test the form submission and retrieval functionality. Open this file in your browser to interact with the form and submit data to the backend.

## Logging

The application includes logging to help with debugging and monitoring. Ensure logging is configured in `appsettings.json`.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.

## License

This project is licensed under the MIT License.
