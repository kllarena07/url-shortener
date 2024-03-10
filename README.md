# URL Shortener Express and MongoDB App

This is a simple URL shortener application built using Express.js and MongoDB. It allows users to create shortened URLs for longer URLs.

## Features

- Shorten URLs: Users can submit a long URL, and the app generates a shortened version of it.
- Redirect: Users can access the shortened URL, and the app redirects them to the original long URL.

## How it Works

### Installation

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

### Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter the long URL you want to shorten in the provided input field and submit the form.
3. Copy the generated shortened URL and use it to access the original URL.

## Code Structure

### `server.js`

This file is the main entry point for the application. It sets up the Express server, connects to the MongoDB database, and defines the routes for handling URL shortening and redirection.

### `CreateRoute.js`

This file contains the function `create_route`, which generates a shortened route for a given long URL. It uses the `crypto` module to generate a random string and saves the mapping between the shortened route and the original URL in the MongoDB database.

### `GetIdentityRoute.js`

This file contains the function `get_identity_route`, which retrieves the original long URL associated with a shortened route from the MongoDB database.

### `Route.js`

This file defines the Mongoose schema for the routes stored in the MongoDB database. It includes fields for the shortened route and the original URL.

## Dependencies

- `express`: Web framework for Node.js
- `mongoose`: MongoDB object modeling tool
- `crypto`: Cryptographic functionality for generating random strings

## Environment Variables

- `PORT`: Port number for the Express server (default is 3000)
- `DB_URL`: MongoDB connection string

## Credits

This project was created by Kieran Llarena. Documentation was created by ChatGPT
