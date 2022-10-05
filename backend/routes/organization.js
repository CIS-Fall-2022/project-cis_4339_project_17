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

module.exports = router;