// Version 1.1 Everything Working -- Jason Lu
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
    ).sort({ 'updatedAt': -1 }).limit(10);
});

//GET single entry by ID
router.get("/id/:id", (req, res, next) => { 
    eventsdata.find({ event_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

//GET entries based on search query
//Ex: '...?eventName=Food&searchBy=name' 
router.get("/search/", (req, res, next) => { 
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { event_name: { $regex: `^${req.query["event_name"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'date') {
       /* dbQuery = {
            date:  req.query["eventDate"]
        }*/
        dbQuery = { event_date: { $regex: `^${req.query["event_date"]}`, $options: "i" } }
    };
    eventsdata.find( 
        dbQuery, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
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
    } else {
        res.json(data)
    }
})
});

//POST
router.post("/", (req, res, next) => { 
    eventsdata.create( 
        req.body, 
        (error, data) => { 
            if (error) {
                return next(error);
            } else {
                res.json(data);
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
            } else {
                res.json(data);
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
        else {
            res.json(data);
        }
    });
});

//DELETE person by ID -- Jason Lu 10/5/2022 5:13 AM
router.delete('/:id', (req, res, next) => {
    //mongoose will use _id of document
    eventsdata.findOneAndRemove({ event_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = router;