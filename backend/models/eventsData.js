//This is the Events collection
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventsSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    event_id: {
        type: Number,
        required: true
    },
    client_id: {
        type: Number,
        required: true
    },
    event_name: {
        type: String,
        required: true
    },
    organization_id:{
        type: Number,
        required: true
    },
    event_date: {
        type: Date,
    },
    description: {
        type: String,
    },
    services: {
        type: Array
    },
    //Embedded location information
    location: {
        address_1: {
            type: String,
        },
        address_2: {
            type: String,
        },
        city: { 
            type: String,
        },
        state: {
            type: String,
        },
        zip: {
            type: String,
        }},
       
        //Make an array to allow the client to input multiple attendees
    attendee: {
        type: Array
    },
},
    {
        collection: 'eventsData'
    });
// create models from mongoose schemas
const eventsdata = mongoose.model('eventsData', eventsSchema);
//    creating the applicant collection and adding the schemas in the database.
module.exports = { eventsdata }