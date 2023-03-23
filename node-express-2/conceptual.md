### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT called a Jot is a JSON Web Token which allows for securely information to be transmitted

- What is the signature portion of the JWT?  What does it do?
The signature verifies the sender of the JWT by sending a payload and secret key that can be verified by the server is the the signature matches

- If a JWT is intercepted, can the attacker see what's inside the payload?
If a JWT is intercepted the attacker can see what's inside the payload however they cannot modify it without the signature 

- How can you implement authentication with a JWT?  Describe how it works at a high level.
If a user has authentication credentials they can send a request to the sever and the server can verify, the server and client can use a signature to review payloads and the server then assign permissions to the client once authorized 

- Compare and contrast unit, integration and end-to-end tests.
All types of tests are automated,, however unit only test individual code pieces, integration tests the interactions between different pieces of code and that they work together correctly, end-to-end tests the entire process all the way to the UI and is mostly handled by QA

- What is a mock? What are some things you would mock?
A mock is a test using fake data, rather than connecting to a real database it uses tests databases in place, somethign you would mock is network requests or DB queries 

- What is continuous integration?
CI is when developers change/update/fix code in a shared repository and an automated test will check the code is ready for development 

- What is an environment variable and what are they used for?
Environment variablesare used to store information that should not be hard-coded into the application code, they allow for an app to be configured differently without changing the code

- What is TDD? What are some benefits and drawbacks?
TDD is when developers will writing out tests before writing the actual code, then writing the code to pass the test before continuing its easier to know if the code is working and reduces bugs however can take a lot of time because you have to write the tests before the code and spend time making sure a test pass before moving on and completing the entire code 

- What is the value of using JSONSchema for validation?
JSONschema for validation is useful because it automates data by enforcing what data must be in the JSON 

- What are some ways to decide which code to test?
Testing code the changes often, code that contains sensitive or specific data, or testing the complex or critical parts of an app

- What does `RETURNING` do in SQL? When would you use it?
RETURNING is used when DELETE UPDATE or INSERT is used to return the modified rows 

- What are some differences between Web Sockets and HTTP?
HTTP uses requests and responses between clients and severs, Web Sockets uses real-time communication when it comes to transferring data, with that it means Web Sockets need to have additional security since it has consist communication 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I liked Flask a bit more because it was Python based and while JS is a bit easier to write, Flask felt more friendly and easier to adjust code accordingly. I felt with Flask I could do things more independently with success with Express I needed to do a little extra research into why or why not something worked. 