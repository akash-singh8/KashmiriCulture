# KashmiriCulture

## Introduction

Welcome to the KashmiriCulture! This website is a platform dedicated to showcasing and celebrating the rich and diverse cultural heritage of Kashmir. It allows users to explore various aspects of Kashmiri culture, such as traditional music, art, cuisine, festivals, and more. Users can also interact with the content by liking and commenting on their favorite cultural elements.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Screenshots](#screenshots)
- [How to Contribute](#how-to-contribute)

## Features

1. **Explore Cultural Elements:** Users can browse through a wide range of cultural elements from Kashmir, including traditional music, art, dance, festivals, attire, and more.

2. **Like and Comment:** Registered users can like and comment on their favorite cultural elements, fostering interaction and engagement.

3. **User Authentication:** The website supports user registration and authentication to enable users to like and comment.


## Technologies Used

The website is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a robust and efficient foundation for its functionalities. Here are the key technologies used:

- Frontend:
  - React.js: A popular JavaScript library for building user interfaces.
  - HTML5 and CSS3: For structuring and styling the frontend components.
  - React Router: For handling routing within the single-page application.

- Backend:
  - Node.js: JavaScript runtime for server-side development.
  - Express.js: A lightweight framework for building web applications in Node.js.
  - MongoDB: A NoSQL database used for storing cultural elements and user data.
  - Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
  - JSON Web Tokens (JWT): For secure user authentication.

## Setup

To run the website locally on your machine, follow these steps:

1. Clone the repository from GitHub:
```
git clone https://github.com/akash-singh8/KashmiriCulture
```

2. Install the required dependencies for both the frontend and backend:

```
cd frontend
npm install
cd ../backend
npm install
```

3. Configure the environment variables:
- Create a `.env` file in the `backend` folder and provide necessary configurations like database connection URL, JWT secret, etc.

4. Seed the database (optional):
- If you have a set of initial data, you can seed the MongoDB database using the provided scripts.

5. Start the development server:
- Open two terminals, one for the frontend and one for the backend:

```
cd frontend
npm run dev
cd backend
npm start
```

7. Access the website locally:
- Open your web browser and go to `http://localhost:3000` to view the website.


## Screenshots
![image](https://github.com/akash-singh8/KashmiriCulture/assets/85285176/c734c24b-9dd2-488e-bd4d-b12aee2f9c77)
![image](https://github.com/akash-singh8/KashmiriCulture/assets/85285176/08c2b9a0-7b49-4545-a18a-b46859110830)
![image](https://github.com/akash-singh8/KashmiriCulture/assets/85285176/7ab14ed5-f754-49d5-ba3d-ad716f51df09)


## How to Contribute

We welcome contributions to improve and expand the website's content and features. To contribute, follow these steps:

1. Fork the repository on GitHub.

2. Create a new branch from the `main` branch for your work.

3. Make your changes and additions.

4. Commit and push your changes to your forked repository.

5. Create a pull request (PR) to the original repository's `main` branch.

6. Wait for feedback or approval from the maintainers. Your PR may be reviewed, and changes may be requested before merging.

7. Once approved, your changes will be merged into the main project.


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
