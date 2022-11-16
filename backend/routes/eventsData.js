// Version 1.4 Everything Working -- Jason Lu
// All routes working
// Graph backend not working
// Improved Console Logs and Errors

const express = require("express");
const router = express.Router();

//importing data model schemas
let { eventsdata } = require("../models/eventsData"); 

//GET all entries
router.get("/", (req, res, next) => { 
    eventsdata.find( 
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(9999999);
});

//GET single entry by ID
router.get("/id/:id", (req, res, next) => { 
    eventsdata.find({ event_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        }
        else if (data === null) {
            res.status(404).send('Event ID Not Found. Confirm Event ID.');
        }  
        else {
            res.json(data)
        }
    })
});

//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { eventName: { $regex: `^${req.query["eventName"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'date') {
       /* dbQuery = {
            date:  req.query["eventDate"]
        }*/
        dbQuery = { eventDate: { $regex: `^${req.query["eventDate"]}`, $options: "i" } }
    };
    eventsdata.find( 
        dbQuery, 
        (error, data) => { 
            if (error) {
                res.send('Search Did Not Match. Confirm Search Query');
                console.log('Search Did Not Match. Confirm Search Query')
            } 
            else {
                res.json(data);
            }
        }
    );
});

//GET events for which a client is signed up
router.get("/client/:id", (req, res, next) => { 
    eventsdata.find({ client_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        }
        else if (data === null) {
            res.status(404).send('Client ID Not Found. Confirm Client ID.');
        } 
        else {
            res.json(data)
        }
    })
    });

//POST
router.post("/", (req, res, next) => { 
    eventsdata.create( 
        req.body, 
        (error) => { 
            if (error) {
                return next(error);
            } 
            else {
                res.send('Event Successfully Added');
                console.log('Event Successfully Added')
            }
        }
    );
});

//PUT
router.put("/:id", (req, res, next) => {
    eventsdata.findOneAndUpdate(
        { event_id: req.params.id },
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } 
            else if (data === null) {
                res.status(404).send('Event ID Not Found. Confirm Event ID.');
            }
            else {
            res.send('Event Successfully Updated');
            console.log('Event Successfully Updated')
            }
        }
    );
});

//PUT add attendee to event
router.put("/addAttendee/:id", (req, res, next) => {
    eventsdata.findOneAndUpdate({event_id: req.params.id }, {
        $push: {
            attendee: req.body.attendee
        }
    }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Event ID Not Found. Confirm Event ID.');
        }
        else {
            res.send('Attendee Successfully Added');
            console.log('Attendee Successfully Added')
        }
    });
});


//DELETE event by ID -- Jason Lu 10/5/2022 5:13 AM
router.delete('/:id', (req, res, next) => {
    eventsdata.findOneAndRemove({ event_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        } 
        else if (data === null) {
            res.status(404).send('Event ID Not Found. Confirm Event ID.');
        }
        else {
            res.send('Event Successfully Deleted');
            console.log('Event Successfully Deleted');
        }
    });
});


// **We could not get the graph backend to be functional.
// **We will attempt to fix this for the frontend.

// //GET for Graph Data
// router.get('/total/:id', (req, res, next) => {
//     eventsdata.aggregate([
//         { $match: { event_id: req.params.id } },
//         { $project: { _id: 0, event_id : 1} },
//         { $group: { _id: "$attendee.attendee_id" } }, //only distinct
//         { $count: "total" }
//         // instead of $count could also use:
//         //{ $group: { _id: null, myCount: { $sum: 1 } } },
//         //{ $project: { _id: 0 } }
//     ], (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data);
//         }
//     });
// });

/* //GET clients attending events in the past 2 months
//Cite for date agrergation: https://stackoverflow.com/questions/58232356/mongodb-subtract-months-from-date-with-value-from-database
router.get("/pastAttendees/", (req, res, next) => { 
    eventsdata.find(
        {
            subtractedDate: {
            $gte:new Date(new Date().setMonth(new Date().getMonth() - 2)),
            $lt:new Date()},
            org_id: process.env.ORG,
        },
        {
            eventName:1,
            date:1,
            attendee:{$size:"$attendee"}
        },
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
}); */
module.exports = router;