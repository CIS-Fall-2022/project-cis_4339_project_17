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

module.exports = router;