# Property Renting Website - MERN Stack

![Property Renting](https://your-cloudinary-image-url.com/property-image.jpg)

This is a full-stack web application for property renting, built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application utilizes Redux Toolkit for state management and the Cloudinary API for image storage and management.

## Features

- User Authentication: Users can sign up, log in, and log out. Authentication is handled using JWT (JSON Web Tokens) for secure access.
- Property Listings: Users can view a list of available properties for rent, each displaying property details and images.
- Property Details: Users can click on a property to view its detailed information, including images, description, amenities, and pricing.
- Property Upload: Authenticated users can upload their properties for rent, including property details and images. Images are stored and managed using the Cloudinary API.
- State Management: Redux Toolkit is used for efficient state management, providing a predictable and centralized state for the application.

## Technologies Used

- Frontend: React.js, Redux Toolkit
- Backend: Node.js, Express.js, MongoDB
- Image Storage: Cloudinary API
- Authentication: JSON Web Tokens (JWT)

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/property-renting-mern.git`
2. Navigate to the project directory: `cd property-renting-mern`
3. Install dependencies for the frontend and backend:
   - Frontend: `cd client && npm install`
   - Backend: `cd server && npm install`
4. Create a `.env` file in the `server` directory and add your MongoDB connection string and Cloudinary API credentials:
   ```env
   MONGODB_URI=your-mongodb-connection-string
   CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```
5. Start the frontend and backend servers:
   - Frontend: `cd client && npm start`
   - Backend: `cd server && npm start`
6. Open your browser and navigate to `http://localhost:3000` to access the application.

## Screenshots

![Screenshot 1](https://your-cloudinary-image-url.com/screenshot1.jpg)
![Screenshot 2](https://your-cloudinary-image-url.com/screenshot2.jpg)

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, please create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

---

Feel free to modify and customize this README according to your project's specific details and requirements. Make sure to replace placeholders like `your-username`, `your-cloudinary-image-url.com`, and update any URLs or paths to match your project structure.
