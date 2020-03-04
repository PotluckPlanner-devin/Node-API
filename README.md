# PotluckPlanner-backend

***

URL: https://potluckplanner-buildweek.herokuapp.com/

*** 

### The following endpoints are available for **AUTHENTICATION ROUTER**

* POST /api/authentication/register
> username, email, and password are required.
> Return = nothing

* POST /api/authentication/login
> username, and password are required
> Returns a token, and userID 

***

### The following endpoints are available for **USERS ROUTER**

* GET /api/users/
> Token is required
> Returns all users

* GET /api/users/:id
> Token is required
> ID is required
> Returns specific user

* PUT /api/users/:id
> Token is required
> User object is required
> User ID is required 
> (In that order )
> Returns nothing

* DELTE /api/users/:id
> Token is required
> User ID is required
> Returns nothing

***

### The following endpoints are available for **POTLUCK ROUTER**

* GET /api/potluck/
> Token is required
> Returns all users

* GET /api/potluck/:id
> Token is required
> ID is required
> Returns a specific user

* POST /api/potluck/
> Token is required
> user_id, location, potluckName, date, and time are required
> Returns nothing

* PUT /api/potluck/:id
> Token is required
> Potluck object is required
> Potluck ID is required
> (In that order)
> Returns nothing

* DELETE /api/potluck/:id
> Token is required
> User ID is required
> Returns nothing

### The following endpoints are available for **FOOD ROUTER**

* GET /api/food/:potluckID
> Token is required
> Potluck ID is required
> Returns a list of food requested at given potluckID

* POST /api/food/:potluckID
> Token is required
> Potluck ID is reqruied in URL
> foodName is required
> Returns nothing

* POST /api/food/:potluckID/isTaken
> Token is required
> Potluck ID is required
> foodName is required
> Returns nothing

* PUT /api/food/:foodID (**DEPRECIATED**)
> Token is required
> Food ID is required
> Returns nothing

* DELETE /api/food/:potluckID
> Token is required
> Potluck ID is required
> foodName is required
> Returns nothing

### The following endpoints are available for **USER-POTLUCK ROUTER**

* GET /api/user-potluck/:potluckID/attending
> Token is required
> Potluck ID is required
> Returns list of users who are going to given potluck ID

* GET /api/user-potluck/:userID/user
> Token is required
> User ID is required
> Returns a list of potlucks that user is invited to attend

* POST /api/user-potluck/:potluckID
> Token is required
> Potluck ID is required
> username is required
> Returns nothing

* DELETE /api/user-potluck/:potluckID
> Token is required
> Potluck ID is required
> username is required
> Returns nothing
