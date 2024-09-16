Elegant Ecommerce Platform
==========================

Table of Contents
-----------------

* [Introduction](#introduction)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Running the Application](#running-the-application)
* [Environment Variables](#environment-variables)
* [API Endpoints](#api-endpoints)
* [Client-Side](#client-side)

Introduction
---------------

The Elegant Ecommerce Platform is a robust and scalable e-commerce application built using Node.js, Express.js, and MongoDB. The platform provides a seamless user experience for customers to browse and purchase products online. The application is designed to be highly customizable and extensible, making it an ideal choice for businesses of all sizes.

Features
------------

* User Authentication: Secure user registration and login functionality using password hashing and JSON Web Tokens (JWT)
* Product Management: readand delete  products with images and descriptions
* Shopping Cart: Allow customers to add and remove products from their shopping cart

Tech Stack
-------------

* Backend: Node.js, Express.js, MongoDB
* Frontend: React.js (client-side)
* Database: MongoDB
* Authentication: JSON Web Tokens (JWT)
* Password Hashing: bcrypt

Prerequisites
----------------

* Node.js (version 14 or higher)
* MongoDB (version 4 or higher)
* npm (version 6 or higher)

Installation
------------

1. Clone the repository: git clone https://github.com/your-username/elegant-ecommerce-platform.git
2. Install dependencies: npm install
3. Create a new MongoDB database and add the connection string to the config/db.js file
4. Start the application: npm start

Running the Application
-------------------------

1. Start the application: npm start
2. Open a web browser and navigate to http://localhost:3000
3. Use the following API endpoints to interact with the application:
	* POST /signup: Create a new user account
	* POST /signin: Login to an existing user account
	* GET /products: Retrieve a list of products

Environment Variables
----------------------

* PORT: The port number to use for the application (default: 3000)
* MONGO_URI: The connection string for the MongoDB database
* JWT_SECRET: The secret key for signing JSON Web Tokens
* PAYMENT_GATEWAY: The payment gateway to use for transactions (e.g. Stripe, PayPal)

Example .env file:
makefile
PORT=3000
MONGO_URI=mongodb://localhost:27017/elegant-ecommerce-platform
JWT_SECRET=your-secret-key
PAYMENT_GATEWAY=stripe

API Endpoints
----------------

### User Endpoints

* POST /signup: Create a new user account
* POST /signin: Login to an existing user account
* GET /users/me: Retrieve the current user's profile
* PATCH /users/me: Update the current user's profile
* DELETE /users/me: Delete the current user's account

### Product Endpoints

* GET /products: Retrieve a list of products
* GET /products/:id: Retrieve a single product by ID
* POST /products: Create a new product
* PATCH /products/:id: Update a product
* DELETE /products/:id: Delete a product



Client-Side
-------------

The client-side of the application is built using React.js and is located in the client folder. The client-side application provides a user-friendly interface for customers to browse and purchase products online.

### Client-Side Features

* Product Details: Display detailed information about a single product
* Shopping Cart: Allow customers to add and remove products from their shopping cart

### Client-Side Installation
-------------------------

1. Navigate to the client folder:
   ```bash
   cd client
2. Install dependencies:
   ```bash
    npm install
4. Start the client-side application:
   ```bash
   npm run dev
5. Open a web browser and navigate to
   ```bash
   http://localhost:3001
