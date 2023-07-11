// Iteration #1
const drones=[
    {
    name: "icarus",
    propellers: 2,
    maxSpeed: 15 
    },
    {
    name: "js",
    propellers: 3,
    maxSpeed: 12 
    },
    {
        name: "pippo",
        propellers: 2,
        maxSpeed: 18 
        }
]

const mongoose = require("mongoose");
const Drone = require('../models/Drone.model');
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
   Drone.create(drones)  
   .then((droneDB)=>{
    console.log(droneDB)
  })
   
  })
 
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
