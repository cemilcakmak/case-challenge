# Technical Phase - Case Challenge 
<br><b>Requirements</b>
<br>● The code should be written in Node.js using express framework
<br>● The endpoint should just handle HTTP POST requests.
<br>● The application should be deployed on AWS or Heroku. You don’t need to use any

<br>API Gateway, Load Balancers or any other layer than the developed application.
<br>● The up to date repo should be publicly available in Github, Bitbucket or equivalent.
Deliverables
<br>● The public repo URL which has the source code of the project, and a set of
instructions if there is any project specific configurations needed to run the project.
<br>● The public endpoint URL of the deployed API which is available for testing.

<b>Crucial Points</b>
<br>● Delivering a Working RESTful API.
<br>● Clean and Production Ready Code
<br>● Error Handling
<br>● Comments and Documentation
<br>● Unit and/or Integration Tests (Jest is preferable but Mocha also works)
<br>● Avoid Over Engineering

<b>Request Payload</b>
<br>The request payload will include a JSON with 4 fields.
<br>● “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You
should filter the data using “createdAt”
<br>● “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in
the documents should be between “minCount” and “maxCount”.

<b>Sample:</b>
~~~
{
"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000
}
~~~

<b>Response Payload</b>
<br>Response payload should have 3 main fields.
<br>● “code” is for status of the request. 0 means success. Other values may be used
for errors that you define.
<br>● “msg” is for description of the code. You can set it to “success” for successful
requests. For unsuccessful requests, you should use explanatory messages.
<br>● “records” will include all the filtered items according to the request. This array should
include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts”
array in the document.

<b>Sample:</b>
~~~
{
  "code":0,
  "msg":"Success",
  "records":[
    {
      "key":"TAKwGc6Jr4i8Z487",
      "createdAt":"2017-01-28T01:22:14.398Z",
      "totalCount":2800
    },
    {
      "key":"NAeQ8eX7e5TEg7oH",
      "createdAt":"2017-01-27T08:19:14.135Z",
      "totalCount":2900
    }
  ]
}
~~~

<br><b>DESCRIPTION</b><br>
<br>The project has been deployed into Heroku.
<br>https://getircasechallenge-cemilcakmak.herokuapp.com/
Requests should be send into: 
~~~ 
https://getircasechallenge-cemilcakmak.herokuapp.com/challenge/get-keys/
~~~

If project will be run in local, requests should be send into:
~~~ 
localhost:4000/challenge/get-keys/
~~~

To run project:
~~~ 
nodemon app.js
~~~

To run tests
~~~ 
npm test
~~~

Sample request is written above, users can get several codes and message in response:
<br>- 0: Success
<br>- 1: No Data Found
<br>- 2: Database Error
<br>- 3: Bad Request. Invalid Parameters
<br>- 4: Internal Server Error

There are 7 packages in the project:
<br><b>__test__ </b>: Contains 4 different test cases, used Jest and Supertest
<br><b>controllers</b>: Is a simple controller class, gets the request throught router, checks whether parameters are valid to process or not.
<br><b>db</b>: It is not good to use db operations in app or routers therefore seperated it.
<br><b>middleware</b>: Contains middleware exceptions. There is only 1 exception for now, that is notFound. If users send their requests except /challenge/get-keys
<br><b>models</b>: Contains schemas for mongodb operations.
<br><b>routes</b>: Contains getir-challenge router. Thought endpoints should not be in app.js therefore created this layer.
<br><b>services </b>: Handle HTTP Requests operations. If request is valid to be processed, service classes takes and send it as mongodb query, get result and return to controller.


