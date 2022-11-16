const express = require("express");
const router = express.Router();

//importing data model schemas 
let { organization } = require("../models/organization");

//GET single entry by ID
router.get("/id/:id", (req, res, next) => {
    organization.find(
        { organization_id: req.params.id },
        (error, data) => {
            if (error) {
                return next(error);
            }
            else if (data === null) {
                res.status(404).send('Organization ID Not Found. Confirm Organization ID.');
            }
            else {
                res.json(data);
            }
        }
    );
});

module.exports = router;