const express = require("express");
const router = express.Router();

//importing data model schemas 
let { organization } = require("../models/organization");

//GET all entries
router.get("/", (req, res, next) => {
    organization.find(
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
    organization.find(
        { organization_id: req.params.id },
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
    organization.create(
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
    organization.createdAt;
    organization.updatedAt;
    organization.createdAt instanceof Date;
});

//PUT update (make sure req body doesn't have the id)
router.put("/:id", (req, res, next) => {
    organization.findOneAndUpdate(
        { organization_id: req.params.id },
        req.body,
        (error, data) => {
            if (error) {
                return next(error);
            }
            else if (data === null) {
                res.status(404).send('Organization ID Not Found. Confirm Organization ID.');
            }
            else {
                res.send('Organization Successfully Updated');
                console.log('Organization Successfully Updated');
            }
        }
    );
});

router.delete('/:id', (req, res, next) => {
    //mongoose will use id of organization
    organization.findOneAndRemove({ organization_id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Organization ID Not Found. Confirm Organization ID.');
        }
        else {
            res.send('Organization Successfully Deleted');
            console.log('Organization Successfully Deleted');
        }
    });
});

module.exports = router;