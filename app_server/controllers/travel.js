const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

// Comment out the old static JSON file read
// var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* GET travel view */
const travel = async function(req, res, next) {
    // console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
        .then(res => res.json()) // Convert response to JSON
        .then(json => {
            // console.log(json); // Uncomment to log data for debugging
            let message = null;

            // Check if the response is not an array
            if (!(json instanceof Array)) {
                message = 'API lookup error';
                json = []; // Assign an empty array to avoid rendering issues
            } 
            // Check if the array is empty
            else if (!json.length) {
                message = 'No trips exist in our database!';
            }

            res.render('travel', { title: 'Travlr Getaways', trips: json, message });
        })
        .catch(err => res.status(500).send(err.message));
    // console.log('TRAVEL CONTROLLER AFTER RENDER');
};

module.exports = {
    travel
};
