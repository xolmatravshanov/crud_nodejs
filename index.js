const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))
// parse requests of content-type - application/json
app.use(bodyParser.json())


// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Require employee routes
const employeeRoutes = require('./src/routes/employee.routes')

const BASE_V1_ENDPOINT = "/api/v1/";
// using as middleware
app.use(`${BASE_V1_ENDPOINT}employees`, employeeRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});