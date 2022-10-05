const express = require("express");
const router = express.Router();

//importing data model schemas
let { intakedata } = require("../models/intakeData.js");


//GET all entries
router.get("/", (req, res, next) => {
    intakedata.find(
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
    intakedata.find(
        { intake_form_id: req.params.id },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
});




//POST
router.post("/", (req, res, next) => {
    intakedata.create(
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
    intakedata.createdAt;
    intakedata.updatedAt;
    intakedata.createdAt instanceof Date;
});

//PUT update (make sure req body doesn't have the id)
router.put("/:id", (req, res, next) => {
    intakedata.findOneAndUpdate(
        { intake_form_id: req.params.id },
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
    intakedata.findOneAndRemove({ intake_form_id: req.params.id }, (error, data) => {
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