models/users.js Line 116 added throw to the expressError 
routes/users.js DELETE route was updated to include an await fuction to check if the user exists if they don't we'll get error 404 
app.js Removed line 38 as it was a duplicate of line 36 
(Maybe) Updated Line 1 comment from /** Database setup for jobly */ to /** Database setup for bank.ly */
routes/auth.js Line 41 changed to an await function so that is returns the user and not a promise
middleware/auth.js added an error message along with the status 401 to state "Token is Invaild"