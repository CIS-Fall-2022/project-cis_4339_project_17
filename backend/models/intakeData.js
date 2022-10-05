//This is the Intake Form collection
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let intakeSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    intake_form_id: {
        type: Number,
        required: true,
    },
    organization_id:{
        type: Number,
        required: true
    },
    client_id: {
        type: Number,
        required: true
    },
    event_id: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date,
    },
    end_date: {
        type: Date,
    },
    modify_time: {
        type: Date,
        required: true,
        default: Date.now,
    },
},
    {
        collection: 'intakeData'
    });
 //    creating the applicant collection and adding the schemas in the database.
module.exports = mongoose.model('intakeData', intakeSchema)


