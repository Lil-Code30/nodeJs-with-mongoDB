# NodeJS with MongoDB

This is a simple NodeJS project that demonstrates how to connect to a MongoDB database using Mongoose.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Create a `.env` file in the root of the project and add the following line:
   ```
   MONGO_URL=<your-mongodb-connection-string>
   ```
   Replace `<your-mongodb-connection-string>` with your actual MongoDB connection string.

2. Start the server:
   ```bash
   npm run server
   ```
   Or, to run the server in watch mode:
   ```bash
   npm run watch
   ```

## Project Structure

- `server.js`: The main entry point of the application.
- `config/db.js`: Contains the logic for connecting to the MongoDB database.
- `controllers/`: Contains the route handlers.
- `models/`: Contains the Mongoose models.
- `routes/`: Contains the Express routes.

## API Endpoints

The following endpoints are available:

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /post | Get all posts |
| POST | /post | Create a new post |
| PUT | /post/:id | Update a post |
| DELETE | /post/:id | Delete a post |
| PATCH | /post/post-like/:id | Like a post |
| PATCH | /post/post-dislike/:id | Dislike a post |
