const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //better debugging
const cors = require("cors");
//allow using a .env file
require("dotenv").config();   

//creates a new instance of express application
const app = express();

// add cors header to the server
app.use(cors({
  origin: '*'
}));

//sets up mongoose for the mongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connection Success!");
  })
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

//declare port number for the api
const PORT = process.env.PORT || 3000;

//setup
app.use(express.json());
app.use(morgan("dev"));

//import routes
const primaryDataRoute  = require('./routes/primaryData');
const eventsDataRoute  = require('./routes/eventsData');
//setup middle ware for routes
app.use('/primaryData', primaryDataRoute);
app.use('/eventData', eventsDataRoute)

//Setting up main routes
//Clients data route
const clientsDataRoute = require('./routes/clientsData')
app.use('/clientsData', clientsDataRoute)
//Events data route
const eventsDataRoute = require('./routes/eventsData')
app.use('/eventsData', eventsDataRoute)
//Intake data route
const intakesRoute = require('./routes/intakes')
app.use('/intakes', intakesRoute)
//Organization route
const organizationRoute = require('./routes/organization')
app.use('/organization', organizationRoute)


app.listen(PORT, () => {
  console.log("Server started listening on port : ", PORT);
});

//error handler
app.use(function (err, req, res, next) {
  // logs error and error code to console
  console.error(err.message, req);
  if (!err.statusCode)
    err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

