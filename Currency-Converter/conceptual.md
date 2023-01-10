### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
Python is a back-end focuses web development tool that users don't see and is more often server side, while Javascript can be used on both front and back-end and can be both seen by users and a  background process

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
Tecting first to see if the key is in the dictionary before allowing the user to attmept and use it, or by returning an output that checks if that key is in the dictionary and if not resets the page and informs the user of the error with that key being missing

- What is a unit test?
A unit test checks code before it runs to ensure that it will return the correct expected output 

- What is an integration test?
An integration test checks muliple units in code and that theyu work together and do not run into any errors between them 

- What is the role of web application framework, like Flask?
A web application framework allws projects in Python to be started and created/edited more quickly by allowing the coder to do tasks together in a more simple format on applications the most popular frameworks are Flask and Django

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
One would be a direct URL to a food type (pretzel) while the other is a search within foods for type pretzel

- How do you collect data from a URL placeholder parameter using Flask?
request.url

- How do you collect data from the query string using Flask?
 request.query_string

- How do you collect data from the body of the request using Flask?
request.args.get('key')

- What is a cookie and what kinds of things are they commonly used for?
A cookie is a small form of data storage that saves on users device that is used while on browsers which can be used for websites to remember about a users visit so that in the future it makes the users experince more personalized and keeps track of visits 

- What is the session object in Flask?
A session object is a dictionary that contains key:value pairs saved like a cookie except it can change and be updated 

- What does Flask's `jsonify()` do?
The 'jsonify()' converts a float to a JSON  