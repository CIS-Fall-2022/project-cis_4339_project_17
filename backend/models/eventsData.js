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
    organization_id:{
        type: Number,
        required: true
    },
    event_date: {
        type: Date
    },
    //Make an array so that the client can input multiple activities
    activity: [{ 
        activity_type: {
            type: String,
        },
        start_time: {
            type: Date,
        },
        end_time: {
            type: Date,
        },
        note: {
            type: String,
        },
    }],

    //Embedded location information
    location: {
        address: {
            type: String,
        },
        city: { 
            type: String,
        },
        state: {
            type: String,
        },
        zip: {
            type: Number,
        },
        //Make an array to allow the client to input multiple attendees
        attendee: [{
            last_name: {
                type: String,
            },
            first_name: {
                type: String
            },
            gender: {
                type: String
            },
            phone_number: {
                type: Number,
            },
        }],
    },
},
    {
        collection: 'eventsData'
    });
 //    creating the applicant collection and adding the schemas in the database.
module.exports = mongoose.model('eventsData', eventsSchema)


