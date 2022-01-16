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

<b>Worth Highlighting</b>
<br>We expect these requirements can be delivered in 3 to 6 hours. However, it is not a speed
test. Take your time! Your feedback on how much actual time you were needed to deliver
the task will be very helpful but will not be used for the evaluation.
You are free to use any libraries to deliver the needed functionality, but be prepared to
explain other solutions that you would have implemented if you have more time.

<b>Crucial Points</b>
<br>● Delivering a Working RESTful API.
<br>● Clean and Production Ready Code
<br>● Error Handling
<br>● Comments and Documentation
<br>● Unit and/or Integration Tests (Jest is preferable but Mocha also works)
<br>● Avoid Over Engineering

Good luck with this assignment! Try to make good use of this task to demonstrate and
show off your coding skills. If you have any questions, don’t hesitate to ask your contact
person within Getir.

<b>Required Information</b>
<br>MongoDB URI:
<br>mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getircase-study?retryWrites=true

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
