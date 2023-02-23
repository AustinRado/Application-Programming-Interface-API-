#APPLICATION USER INTERFACE
This is a software intermediary that allows two applications to communticate with each other.

##Uses of API
1. Access Data
2. Hide complexity and perform tasks eg an app that wants to show a button on the screen asks the OS to render one.
3. Extend functionality eg Siri, Google assistance

Let's start from the Js Line that gets values and work our way back until it works back to back

helper.get(endpoitn, data, callback)

What the line means;
1. Helper -- this is a library to facilitate network requests. Native Js way of doing so involves a lot moer boilerplate,repetitive code and is almost replaced with open source solution.
2. get -- this specifies what method we will be calling the endpoint with.
Other HTTP methods include; 
GET -- this request is used to retrieve data 
POST -- this request creates new resource and requires a body of data to be parsed in order to do so to retrieve data.
PUT -- this request is used  to change or update state of a resource.
DELETE -- this request is use to remove a resource from the system
