const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model

// GET: /trips - lists all the trips
// Regardless of outcome, response must include HTML status code
// and JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Trip // Use the imported Trip model
    .find({}) // No filter, return all records
    .exec();

    if(!q) {
        // Database returned no data
        return res
        .status(404)
        .json({ message: 'No trips found' }); // Fixed error handling
    } else {
        // Return resulting trip list
        return res
        .status(200)
        .json(q);
    }
};

module.exports = {
    tripsList
};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, response must include HTML status code 
// and JSON message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Trip // Use the correct model, Trip
    .find({'code': req.params.tripCode }) // Return single record
    .exec();

    // Uncomment the following line to show results of query
    // on the console
    // console.log(q);

    if(!q) {
        // Database returned no data
        return res
        .status(404)
        .json({ message: 'Trip not found' }); // Fixed error handling
    } else { // Return resulting trip list
        return res
        .status(200)
        .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};
