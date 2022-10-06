# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup
```
1. npm install

```

 ### Before startup 
Setup a .env file with the following variables, e.g.:

```
MONGO_URL = mongodb+srv://dinh1:cis4339@4339project.c0anf4a.mongodb.net/test
```

### Compiles and hot-reloads for development
```
1. npm start
2. to quit connection: CTRL + C
```
# project-cis_4339_project_17

# Project Overview







#### 1. CLIENT CRUD OPERATIONS
## 1.1 Creating a new client
```
POST http://127.0.0.1:3000/clientsData
```
Example Request (can copy and paste into Postman):
```json
{
  "client_id": 1,
  "organization_id": 1,
  "last_name": "CIS4339Last",
  "first_name": "CIS4339First",
  "gender":"Male",
  "marital_status": "Single",
  "birthday": "2000/05/01",
  "ethnicity": "Hispanic",
  "ssn" : "123-456-7890",
  "contact": {
    "primaryNumber":"111-111-1111",
    "email":"xyz@gmail.com",
    "address_1": "9999 Test Street",
    "address_2": "0000 Test Street",
    "state" : "Texas",
    "zip": 12345,
    "country":"United States"
  },
  "health": {
    "height":6,
    "weight":150,
    "insurance": [{
        "has_insurance":"true",
        "insurance_provider":"Test",
        "member_id" : "testid1"
    }],
    "vaccination_status": "Vaccinated",
    "pregnancy_status": "Not Pregnant"
  },
  "income" : {
      "household_size" : 1,
      "monthly_income" : 1000,
      "other_income" :0,
      "child_support" :0,
      "financial_aid" : 500
  },
  "education" : {
      "highest_completed": "Bachelors",
      "school" : [{
          "school_name" : "Test",
          "school_address" : "Test Street",
          "state": "Texas",
          "major" : "Computer Science",
          "degree_type" : "Bachelors"
      }],
      "certification" : "None"
  }
}
```
With the following fields:
| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid from MongoDB |
| client_id | Number | unique identifier for the client |
| organization_id | Number | identifier for the organization
| last_name | String | last name of the client |
| first_name | String | first name of the client |
| gender | String | gender of the client |
| marital_status | String | marital status of the client |
| birthday | Date | birthday of the client |
| ethnicity | String | ethnicity of the client |
| ssn | String | Social Security Number of the client |
| contact | Object | contains fields for the client's contact information |
| primaryNumber (embedded in contact) | String | phone number of the client |
| email (embedded in contact) | String | email of the client |
| address_1 (embedded in contact) | String | address of the client |
| address_2 (embedded in contact) | String | other address of the client |
| state (embedded in contact) | String | state where the client is residing |
| zip (embedded in contact) | Number | zip code of the client |
| country (embedded in contact) | String | country of the client |
| health | Object | health information of the client |
| height (embedded in health) | Number | height of the client |
| weight (embedded in health) | Number | weight of the client |
| insurance (embedded in health) | Array | health information of the client |
| has_insurance (embedded in insurance) | Boolean | to check if the client has insurance or not |
| insurance_provider (embedded in insurance) | String | name of the insurance provider |
| member_id (embedded in insurance) | String | member id of the client |
| vaccination_status (embedded in health) | String | vaccination status of the client |
| pregnancy_status (embedded in health) | String | pregnancy status of the client |
| income | Object | contains fields for the client's income information |
| household_size (embedded in income) | Number | household size of the client |
| monthly_income (embedded in income) | Number | monthly income of the client |
| other_income (embedded in income) | Number | other income of the client |
| child_support (embedded in income) | Number | the amount of child support of the client |
| financial_aid (embedded in income) | Number | financial aid of the client |
| education | Object | contains fields for the client's education information |
| highest_completed (embedded in education) | String | the highest degree of the client |
| school (embedded in education) | Array | contains the list of schools that the client attends |
| school_name (embedded in school) | String | school name of the client |
| school_address (embedded in school) | String | school address of the client |
| state (embedded in school) | String | state of the school |
| major (embedded in school) | String | major of the client |
| degree_type (embedded in school) | String | degree type of the client |
| certification (embedded in education) | String | certifications of the client |

Example Postman Response: 
// We need to take screenshot of the response in Postman
Example Terminal Response:
// Same but in VSCode Terminal

//Checks for potential error but i copied it from the goods
Potential Errors:
| Error Code | Description |
| --- | --- |
| 500 | Cannot POST; possible error is caused by lack of required information in JSON request |

## 1.2 Getting all the clients
```
GET http://127.0.0.1:3000/clientsData/
This request will pull all information stored in the clientsData collection
```
Example Postman Response:
```json
{
        "contact": {
            "primaryNumber": "111-111-1111",
            "email": "xyz@gmail.com",
            "address_1": "9999 Test Street",
            "address_2": "0000 Test Street",
            "state": "Texas",
            "zip": 12345,
            "country": "United States"
        },
        "health": {
            "height": 6,
            "weight": 150,
            "insurance": [
                {
                    "has_insurance": "true",
                    "insurance_provider": "Test",
                    "member_id": "testid1",
                    "_id": "633e5471a693582e32789d84"
                }
            ],
            "vaccination_status": "Vaccinated",
            "pregnancy_status": "Not Pregnant"
        },
        "income": {
            "household_size": 1,
            "monthly_income": 1000,
            "other_income": 0,
            "child_support": 0,
            "financial_aid": 500
        },
        "education": {
            "highest_completed": "Bachelors",
            "school": [
                {
                    "school_name": "Test",
                    "school_address": "Test Street",
                    "state": "Texas",
                    "major": "Computer Science",
                    "degree_type": "Bachelors",
                    "_id": "633e5471a693582e32789d85"
                }
            ],
            "certification": "None"
        },
        "_id": "5b452890-452c-11ed-b66a-4f32d1fdb420",
        "client_id": 1,
        "organization_id": 1,
        "last_name": "CIS4339Last",
        "first_name": "CIS4339First",
        "gender": "Male",
        "marital_status": "Single",
        "birthday": "2000-05-01T05:00:00.000Z",
        "ethnicity": "Hispanic",
        "ssn": "123-456-7890",
        "createdAt": "2022-10-06T04:07:13.052Z",
        "updatedAt": "2022-10-06T04:07:13.052Z",
        "__v": 0
    },
    {
        "contact": {
            "primaryNumber": "111-111-1111",
            "email": "xyz@gmail.com",
            "address_1": "9999 Test Street",
            "address_2": "0000 Test Street",
            "state": "Texas",
            "zip": 12345,
            "country": "United States"
        },
        "health": {
            "height": 6,
            "weight": 150,
            "insurance": [
                {
                    "has_insurance": "true",
                    "insurance_provider": "Test",
                    "member_id": "testid1",
                    "_id": "633e545ca693582e32789d81"
                }
            ],
            "vaccination_status": "Vaccinated",
            "pregnancy_status": "Not Pregnant"
        },
        "income": {
            "household_size": 1,
            "monthly_income": 1000,
            "other_income": 0,
            "child_support": 0,
            "financial_aid": 500
        },
        "education": {
            "highest_completed": "Bachelors",
            "school": [
                {
                    "school_name": "Test",
                    "school_address": "Test Street",
                    "state": "Texas",
                    "major": "Computer Science",
                    "degree_type": "Bachelors",
                    "_id": "633e545ca693582e32789d82"
                }
            ],
            "certification": "None"
        },
        "_id": "4eef8130-452c-11ed-b66a-4f32d1fdb420",
        "client_id": 2,
        "organization_id": 2,
        "last_name": "CIS4339Last",
        "first_name": "CIS4339First",
        "gender": "Male",
        "marital_status": "Single",
        "birthday": "2000-01-01T06:00:00.000Z",
        "ethnicity": "Hispanic",
        "ssn": "123-456-7890",
        "createdAt": "2022-10-06T04:06:52.364Z",
        "updatedAt": "2022-10-06T04:06:52.364Z",
        "__v": 0
    }
 ```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |

## 1.3 Getting a client through client ID
```
GET http://127.0.0.1:3000/clientsData/id/:id
    example: http://127.0.0.1:3000/clientsData/id/1
```

Example Postman Response:
```json
{
        "contact": {
            "primaryNumber": "111-111-1111",
            "email": "xyz@gmail.com",
            "address_1": "9999 Test Street",
            "address_2": "0000 Test Street",
            "state": "Texas",
            "zip": 12345,
            "country": "United States"
        },
        "health": {
            "height": 6,
            "weight": 150,
            "insurance": [
                {
                    "has_insurance": "true",
                    "insurance_provider": "Test",
                    "member_id": "testid1",
                    "_id": "633e5471a693582e32789d84"
                }
            ],
            "vaccination_status": "Vaccinated",
            "pregnancy_status": "Not Pregnant"
        },
        "income": {
            "household_size": 1,
            "monthly_income": 1000,
            "other_income": 0,
            "child_support": 0,
            "financial_aid": 500
        },
        "education": {
            "highest_completed": "Bachelors",
            "school": [
                {
                    "school_name": "Test",
                    "school_address": "Test Street",
                    "state": "Texas",
                    "major": "Computer Science",
                    "degree_type": "Bachelors",
                    "_id": "633e5471a693582e32789d85"
                }
            ],
            "certification": "None"
        },
        "_id": "5b452890-452c-11ed-b66a-4f32d1fdb420",
        "client_id": 1,
        "organization_id": 1,
        "last_name": "CIS4339Last",
        "first_name": "CIS4339First",
        "gender": "Male",
        "marital_status": "Single",
        "birthday": "2000-05-01T05:00:00.000Z",
        "ethnicity": "Hispanic",
        "ssn": "123-456-7890",
        "createdAt": "2022-10-06T04:07:13.052Z",
        "updatedAt": "2022-10-06T04:07:13.052Z",
        "__v": 0
    }
```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |

## 1.4 Getting a client by Search
```
GET http://127.0.0.1:3000/primaryData/search/?query&searchBy=queryType
    example (by phone number): http://127.0.0.1:3000/primaryData/search/?phoneNumbers.primaryPhone=222-222-2222&searchBy=number

    example (by name -- BOTH first and last names must be used else the url will not work):  http://127.0.0.1:3000/primaryData/search/?firstName=Keanu&lastName=Reeves&searchBy=name 
```

Example Postman Response:
```json
[
    {
        "contact": {
            "primaryNumber": "222-222-2222",
            "email": "xyz@gmail.com",
            "address_1": "9999 Test Street",
            "address_2": "0000 Test Street",
            "state": "Texas",
            "zip": 12345,
            "country": "United States"
        },
        "health": {
            "height": 6,
            "weight": 150,
            "insurance": [
                {
                    "has_insurance": "true",
                    "insurance_provider": "Test",
                    "member_id": "testid1",
                    "_id": "633ea25606fd2de5a48b6518"
                }
            ],
            "vaccination_status": "Vaccinated",
            "pregnancy_status": "Not Pregnant"
        },
        "income": {
            "household_size": 1,
            "monthly_income": 1000,
            "other_income": 0,
            "child_support": 0,
            "financial_aid": 500
        },
        "education": {
            "highest_completed": "Bachelors",
            "school": [
                {
                    "school_name": "Test",
                    "school_address": "Test Street",
                    "state": "Texas",
                    "major": "Computer Science",
                    "degree_type": "Bachelors",
                    "_id": "633ea25606fd2de5a48b6519"
                }
            ],
            "certification": "None"
        },
        "_id": "c9530db0-455a-11ed-832e-e58f5e43cef0",
        "client_id": 3,
        "organization_id": 3,
        "last_name": "CIS4339Last",
        "first_name": "CIS4339First",
        "gender": "Male",
        "marital_status": "Single",
        "birthday": "2000-01-01T00:00:00.000Z",
        "ethnicity": "Hispanic",
        "ssn": "123-456-7890",
        "createdAt": "2022-10-06T09:39:34.548Z",
        "updatedAt": "2022-10-06T09:39:34.548Z",
        "__v": 0
    }
]
```
Example Terminal Response:

GET /clientsData/search/?contact.primaryNumber=222-222-2222&searchBy=number 200 66.469 ms - 1097
## 1.5 Getting the information of the events for a single client
```
GET http://127.0.0.1:3000/clientsData/events/:id
    example: http://127.0.0.1:3000/clientsData/events/5
```

//Add more data in Postman so it can have a response
Example Postman Response:
```json


```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |

## 1.6 Updating a client through client ID
```
PUT http://127.0.0.1:3000/clientsData/:id
    example: http://127.0.0.1:3000/clientsData/2

This request can update with any other field, but client_id is required
```
Example Postman Request:
```json
{
        "contact": {
            "primaryNumber": "111-111-1111",
            "email": "xyz@gmail.com",
            "address_1": "9999 Test Street",
            "address_2": "0000 Test Street",
            "state": "Texas",
            "zip": 12345,
            "country": "United States"
        },
        "health": {
            "height": 6,
            "weight": 150,
            "insurance": [
                {
                    "has_insurance": "true",
                    "insurance_provider": "Test",
                    "member_id": "testid1",
                    "_id": "633d3dc5db6e689d247b3dfa"
                }
            ],
            "vaccination_status": "Vaccinated",
            "pregnancy_status": "Not Pregnant"
        },
        "income": {
            "household_size": 1,
            "monthly_income": 1000,
            "other_income": 0,
            "child_support": 0,
            "financial_aid": 500
        },
        "education": {
            "highest_completed": "Bachelors",
            "school": [
                {
                    "school_name": "Test",
                    "school_address": "Test Street",
                    "state": "Texas",
                    "major": "Computer Science",
                    "degree_type": "Bachelors",
                    "_id": "633d3dc5db6e689d247b3dfb"
                }
            ],
            "certification": "None"
        },
        "client_id": 2,
        "organization_id": 2,
        "last_name": "CIS4339Last",
        "first_name": "CIS4339First",
        "gender": "Male",
        "marital_status": "Married",
        "birthday": "2000-01-01",
        "ethnicity": "Hispanic",
        "ssn": "123-456-7890",
        "createdAt": "2022-10-05T08:18:13.852Z",
        "updatedAt": "2022-10-05T08:18:13.852Z",
        "__v": 0
    }
```
Example Postman Response:
// Add proof

Example Terminal Response:
//Add proof


//Make up an error or ust use the same thing
Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot PUT; possible error is caused by incorrect spelling in request URL or forgetting to put an id number |

## 1.7 Deleting a client through client ID
```
DELETE http://127.0.0.1:3000/clientsData/:id
    example: DELETE localhost:3000/clientsData/2
```

Example Postman Response:
// Add proof


Example Terminal Response:
// Add proof


//Make up an error or just use the same thing
Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot DELETE; possible error is caused by incorrect spelling in request URL or forgetting to put an id number |

#### 2. EVENTS CRUD OPERATIONS (WIP)
## 2.1 Creating a new event

## 2.2 Getting all the events

## 2.3 Getting an event through event_id

## 2.4 Getting an event by Search

## 2.5 Getting information of events through client_id

## 2.6 Updating an event by client_id

## 2.7 Adding attendees to an event

## 2.8 Deleting an event by event_id

## 2.9 Graph data

## 2.10 Deleting attendees





#### 3. INTAKE FORM CRUD OPERATIONS
## 3.1 Creating an Intake Form 
```
POST http://127.0.0.1:3000/intakeData/
```
Example Request (can copy and paste into Postman):
```json
{
  "intake_form_id": 4,
  "organization_id": 1,
  "client_id": 1,
  "event_id": 1,
  "event_date": "2022/05/21"
  
}
```
With the following fields:
| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid from MongoDB |
| intake_form_id | Number | unique identifier for the intake form |
| organization_id | Number | identifier for the organization |
| client_id | Number | unique identifier for the client |
| event_id | Number | unique identifier for the event |
| event_date | Date | date of the event |

Example Postman Response: 
// We need to take screenshot of the response in Postman
Example Terminal Response:
// Same but in VSCode Terminal

//Checks for potential error but i copied it from the goods
Potential Errors:
| Error Code | Description |
| --- | --- |
| 500 | Cannot POST; possible error is caused by lack of required information in JSON request |

## 3.2 Getting all the Intake Forms
```
GET http://127.0.0.1:3000/intakeData/
This request will pull all information stored in the intakeDate collection
```
Example Postman Response:
```json
{
        "_id": "c4e33080-4496-11ed-840e-51e067306f03",
        "intake_form_id": 1,
        "organization_id": 1,
        "client_id": 1,
        "event_id": 1,
        "start_date": "2022-05-20 05:30 PM",
        "end_date": "2022-05-21 07:00 PM",
        "createdAt": "2022-10-05T10:16:25.741Z",
        "updatedAt": "2022-10-05T23:54:52.725Z",
        "__v": 0
    },
    {
        "_id": "dd4c6660-4508-11ed-a65d-1faba27c459b",
        "intake_form_id": 3,
        "organization_id": 1,
        "client_id": 1,
        "event_id": 1,
        "start_date": "2022-05-20 05:30 PM",
        "end_date": "2022-05-20 07:00 PM",
        "createdAt": "2022-10-05T23:53:09.322Z",
        "updatedAt": "2022-10-05T23:53:09.322Z",
        "__v": 0
    },
    {
        "_id": "f1283280-4496-11ed-a2af-b7da22fbf350",
        "intake_form_id": 2,
        "organization_id": 1,
        "client_id": 1,
        "event_id": 1,
        "start_date": "2022-05-20 05:30 PM",
        "end_date": "2022-05-20 07:00 PM",
        "createdAt": "2022-10-05T10:17:40.018Z",
        "updatedAt": "2022-10-05T10:17:40.018Z",
        "__v": 0
    }
```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |
## 3.3 Getting an Intake Form information through intake_form_id
```
GET http://127.0.0.1:3000/intakeData/id/:id
    example: http://127.0.0.1:3000/intakeData/id/3
```
Example Postman Response:
```json
{
        "_id": "277e31e0-452d-11ed-ab60-d5c5a2238392",
        "intake_form_id": 3,
        "organization_id": 1,
        "client_id": 1,
        "event_id": 1,
        "event_date": "2022-05-20T05:00:00.000Z",
        "createdAt": "2022-10-06T04:12:55.681Z",
        "updatedAt": "2022-10-06T04:12:55.681Z",
        "__v": 0
    }
```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |

## 3.4 Updating an Intake Form by intake_form_id
```
PUT http://127.0.0.1:3000/intakeData/:id
    example: http://127.0.0.1:3000/intakeData/1

This request can update with any other field, but intake_form_id is required
```
Example Postman Request:
```json
{
  "intake_form_id": 1,
  "organization_id": 1,
  "client_id": 1,
  "event_id": 1,
  "start_date": "2022-05-20 05:30 PM",
  "end_date": "2022-05-21 07:00 PM"
  
}
```
Example Postman Response:
// Add proof

Example Terminal Response:
//Add proof


//Make up an error or ust use the same thing
Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot PUT; possible error is caused by incorrect spelling in request URL or forgetting to put an id number |

## 3.5 Deleting an Intake Form by intake_form_id
```
DELETE http://127.0.0.1:3000/intakeData/:id
    example: DELETE http://127.0.0.1:3000/intakeData/3
```

Example Postman Response:
// Add proof


Example Terminal Response:
// Add proof


//Make up an error or just use the same thing
Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot DELETE; possible error is caused by incorrect spelling in request URL or forgetting to put an id number |





#### 4. ORGANIZATION CRUD OPERATIONS
## 4.1 Creating an organization
```
POST http://127.0.0.1:3000/organization/
```
Example Request (can copy and paste into Postman):
```json
{
    "organization_id": 3,
    "client_id": 5,
    "organization_name": "Starbucks",
    "organization_desc": "Anti Union Coffee Company"
}
```
With the following fields:
| Field | Type | Description |
| --- | --- | --- |
| __id | String | auto-generated uuid from MongoDB |
| organization_id | Number | identifier for the organization |
| client_id | Number | unique identifier for the client |
| organization_name | String | name of the organization |
| organization_desc | String | description of the organization |

Example Postman Response: 
// We need to take screenshot of the response in Postman
Example Terminal Response:
// Same but in VSCode Terminal

//Checks for potential error but i copied it from the goods
Potential Errors:
| Error Code | Description |
| --- | --- |
| 500 | Cannot POST; possible error is caused by lack of required information in JSON request |

## 4.2 Getting all the Organizations
```
GET http://127.0.0.1:3000/organization/
This request will pull all information stored in the organization collection
```
Example Postman Response:
```json
{
        "_id": "33ae4350-4542-11ed-9b31-a73df032f351",
        "organization_id": 3,
        "client_id": 5,
        "organization_name": "Starbucks",
        "organization_desc": "Anti Union Coffee Company",
        "createdAt": "2022-10-06T06:43:35.561Z",
        "updatedAt": "2022-10-06T06:43:35.561Z",
        "__v": 0
    }
```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |

## 4.3 Getting an Organization information through organization_id
```
GET http://127.0.0.1:3000/organization/id/:id
    example: http://127.0.0.1:3000/organization/id/3
```
Example Postman Response:
```json
{
        "_id": "33ae4350-4542-11ed-9b31-a73df032f351",
        "organization_id": 3,
        "client_id": 5,
        "organization_name": "Starbucks",
        "organization_desc": "Anti Union Coffee Company",
        "createdAt": "2022-10-06T06:43:35.561Z",
        "updatedAt": "2022-10-06T06:43:35.561Z",
        "__v": 0
    }
```
Example Terminal Response:
// Add proof



Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot GET; possible error is caused by incorrect spelling in request URL |

## 4.4 Updating an Organization by organization_id
```
PUT http://127.0.0.1:3000/organization/:id
    example: http://127.0.0.1:3000/organization/1

This request can update with any other field, but clientID is required
```
Example Postman Request:
```json
{
    "organization_id": 3,
    "client_id": 5,
    "organization_name": "Walmart",
    "organization_desc": "Supermarket Center"
}
```
Example Postman Response:
// Add proof

Example Terminal Response:
//Add proof


//Make up an error or ust use the same thing
Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot PUT; possible error is caused by incorrect spelling in request URL or forgetting to put an id number |

## 4.5 Deleting an Organization by organization_id
```
DELETE http://127.0.0.1:3000/organization/id/:id
    example: DELETE http://127.0.0.1:3000/organization/id/1

```
Example Postman Response:
// Add proof


Example Terminal Response:
// Add proof


//Make up an error or just use the same thing
Potential Errors:
| Error Code | Description |
| --- | --- |
| 404 | Cannot DELETE; possible error is caused by incorrect spelling in request URL or forgetting to put an id number |