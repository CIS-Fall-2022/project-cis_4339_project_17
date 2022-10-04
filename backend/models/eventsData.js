//This is the Events collection
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventsSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    client_id: {
        type: Number,
        unique: true,
        required: true
    },
    organization_id:{
        type: Number,
        unique: true,
        required: true
    },
    event_date: {
        type: Date
    },
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
            type: Number,
        },
        home_number: { 
            type: Number,
        },
        cell_number: {
            type: Number,
        },
        email: {
            type: String
        },
        other_email: {
            type: String
        },
        address_1: {
            type: String
        },
        address_2: {
            type: String
        },
        state: {
            type: String
        },
        zip: {
            type: Number
        },
        country: {
            type: String
        },

    },

    // Embedded health in clients collection
    health: {
        height : {
            type: Number
        },
        weight : {
            type: Number
        },
        //Allows clients to add multiple insurance
        insurance : [{
            has_insurance: {
                type: Boolean
            },
            insurance_provider: {
                type: String
            },
            member_id: {
                type: String
            }             
        }],
        vaccination_status : {
            type: String
        },
        pregnancy_status : {
            type: String
        },      
    },
    
     //Embedded income information in clients collection
     income: {
        household_size: {
            type: Number,
        },
        monthly_income: { 
            type: Number,
        },
        other_income: {
            type: Number,
        },
        child_support: {
            type: Number
        },
        financial_aid: {
            type: Number
        },
    },
    
    // Embedded education
    education: {
        highest_completed: {
            type: String,
        },
        //Make an array to allow clients to add multiple schools
        school: [{
            school_name: { 
                type: String,
            },
            school_address: {
                type: String
            },
            state: {
                type: String
            },
            major: {
                type: String
            },
            degree_type: {
                type: String,
            }
        }],
        certification: {
            type: String
        },
    },
    
},
    {
        collection: 'eventsData'
    });
 //    creating the applicant collection and adding the schemas in the database.
module.exports = mongoose.model('eventsData', eventsSchema)
