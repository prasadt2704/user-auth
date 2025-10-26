# User Authentication Project 🔐

A simple user authentication system built with **Node.js**, **Express**, **MongoDB**, **EJS**, and **TailwindCSS**.  
It allows users to register, log in, and manage their accounts securely.

## 📌 Features
- User registration with form validation
- Secure login with password encryption (using bcrypt)
- Session-based authentication
- Logout functionality
- Responsive UI built with TailwindCSS
- Error handling for invalid credentials or duplicate accounts

## 🛠️ Tech Stack
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Templating**: EJS
- **Styling**: TailwindCSS
- **Icons**: Font Awesome

## ⚙️ Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-auth.git
   ````
2. Navigate to the project directory:
  ````bash
  cd user-auth
  ````
3. Install dependencies:
````bash
  npm install
  ````

4. Set up MongoDB:

- Ensure MongoDB is running locally, or use a cloud MongoDB Atlas connection.
- Update the MongoDB connection string in the .env file.
5. Start the application:
````bash
  npm start
  ````

6. Open your browser and navigate to:
````bash
  http://localhost:3000
  ````