const mongoose = require('mongoose');
const Trip = require('../models/travlr');  // Register model

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  const q = await Trip.find({}).exec();
  if (!q) {
    return res.status(404).json({ message: 'No trips found' });
  } else {
    return res.status(200).json(q);
  }
};

// GET: /trips/:tripCode - lists a single trip by code
const tripsFindByCode = async (req, res) => {
  const q = await Trip.find({ 'code': req.params.tripCode }).exec();
  if (!q) {
    return res.status(404).json({ message: 'Trip not found' });
  } else {
    return res.status(200).json(q);
  }
};

// POST: /trips - Adds a new Trip
const tripsAddTrip = async (req, res) => {
  const newTrip = new Trip({
    code: req.body.code,
    name: req.body.name,
    length: req.body.length,
    start: req.body.start,
    resort: req.body.resort,
    perPerson: req.body.perPerson,
    image: req.body.image,
    description: req.body.description
  });

  try {
    const q = await newTrip.save();
    return res.status(201).json(q);  // Success, trip added
  } catch (err) {
    return res.status(400).json({ message: 'Error adding trip', error: err });
  }
};

// PUT: /trips/:tripCode - Updates a trip
const tripsUpdateTrip = async (req, res) => {
  console.log('Request Params:', req.params);
  console.log('Request Body:', req.body);

  try {
    const q = await Trip.findOneAndUpdate(
      { 'code': req.params.tripCode },  // Find by trip code
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true }  // Return the updated document, and run validators
    ).exec();

    if (!q) {
      // If no trip is found
      return res.status(404).json({ message: 'Trip not found' });
    } else {
      // Successfully updated
      return res.status(200).json(q);
    }
  } catch (err) {
    console.error('Error updating trip:', err);
    return res.status(400).json({ message: 'Error updating trip', error: err });
  }
};

// Exporting the methods
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip  // Add the new method here
};
