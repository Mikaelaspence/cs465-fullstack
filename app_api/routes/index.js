const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Define route for GET, POST, and PUT methods
router
  .route('/trips')
  .get(tripsController.tripsList)    // GET: List all trips
  .post(tripsController.tripsAddTrip);  // POST: Add a new trip

// Define route for GET and PUT methods by tripCode
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)  // GET: Find a trip by code
  .put(tripsController.tripsUpdateTrip);  // PUT: Update a trip (New addition)

module.exports = router;
