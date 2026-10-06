// Import the express module
import express from 'express';

// Instantiate an express object
const app = express();

// define a port number
// our server will listen
const PORT = 3000;

// Define the root path
app.get('/', (req, res) => {

    // Send text to the client
    res.send('Hola, Mundo!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

});