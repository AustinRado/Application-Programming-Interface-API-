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
3. Endpoint -- points fo communication when an API interacts and communicates with another system. Basically the URL where the CLIENT gets information from as web servers need some way tof communication with various browsers that the corresponding app might run on. Publicly available URLs are exposed to allow this.
4. Data --  This value is like arguments to a method in programming, Servers might use certain info to serve your request. Eg; if client is fetching a menu, we might want to specify which menu

**in a GET, data is transferred by way of query parameters (Query parameters; a set of parameters attached to the end of a URL --extension of URL that are used to help define specific content or actions based on the data being passed. To append a query params to the end of a URL, a "?" is added followed by a query parameter)
Example, Let's say our endpoint is {server.com/menus} and our data is {menu: salads}. The request will be formatted as {server.com/menus?menu=salads}.
** In a POST request, data is transferred to the body of a request. This is useful when we want to hide info.

5. Callback -- function that's called by the ---helper when the response is given. NB we can't just {const value = helper.get(...)} because a network call is an asycnhronous operation. This means it comes back in a certain amount of time.
