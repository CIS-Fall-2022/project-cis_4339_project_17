//This is the Clients collection
const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let clientsSchema = new Schema({
    _id: {
        type: String,
        default: uuid.v1
    },
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    //Embedded contact information
    email: {
        type: String,
    },
    phoneNumbers: {
        type: Array,
    },
    address: {
        line1: {
            type: String
        },
        line2: {
            type: String
        },
        city: {
            type: String
        },
        county: {
            type: String
        },
        zip: {
            type: String
        },
    },
    org_id: {
        type: String,
        requierd:true,
        default: process.env.ORG
    }
},
    {
        collection: 'clientsData',
        timestamps: true
    });

// create models from mongoose schemas
const clientsdata = mongoose.model('clientsData', clientsSchema);
//    creating the applicant collection and adding the schemas in the database.
module.exports = { clientsdata }