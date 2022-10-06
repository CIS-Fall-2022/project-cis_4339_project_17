// Version 1.1 Everything Working -- Jason Lu
const express = require("express");
const router = express.Router();

//importing data model schemas
let { clientsdata } = require("../models/clientsData");


//GET all entries
router.get("/", (req, res, next) => {
    clientsdata.find(
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                console.log("Get response success! ");
                res.json(data);
            }
        }
    ).sort({ 'updatedAt': -1 }).limit(10);
});

//GET single entry by ID
router.get("/id/:id", (req, res, next) => {
    clientsdata.find(
        { client_id: req.params.id },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});

//GET entries based on search query
//Ex: '...?firstName=Bob&lastName=&searchBy=name' 
router.get("/search/", (req, res, next) => {
    let dbQuery = "";
    if (req.query["searchBy"] === 'name') {
        dbQuery = { first_name: { $regex: `^${req.query["first_name"]}`, $options: "i" }, last_name: { $regex: `^${req.query["last_name"]}`, $options: "i" } }
    } else if (req.query["searchBy"] === 'number') {
        dbQuery = {
            "contacts.primaryPhone": { $regex: `^${req.query["contacts.primaryPhone"]}`, $options: "i" }
        }
    };
    clientsdata.find(
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

//GET events for a single client
router.get("/events/:id", (req, res, next) => {

});

//POST
router.post("/", (req, res, next) => {
    clientsdata.create(
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
    clientsdata.createdAt;
    clientsdata.updatedAt;
    clientsdata.createdAt instanceof Date;
});

//PUT update (make sure req body doesn't have the id)
router.put("/:id", (req, res, next) => {
    clientsdata.findOneAndUpdate(
        { client_id: req.params.id },
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

//DELETE person by ID -- Jason Lu 10/3/2022 9:44 PM
router.delete('/:id', (req, res, next) => {
    //mongoose will use _id of document
    clientsdata.findOneAndRemove({ client_id: req.params.id }, (error, data) => {
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