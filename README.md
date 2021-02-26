# Delila Restó API
### Getting started

1. From the project root, if mysql environment is up and running and you have mysql client installed, run  `mysql --user="yourusername" --database="delilah_db_carlosDWFS" --password="yourpassword" < "/delilah_db.sql"` on a command line. Otherwise, user may download file "delilah_db.sql" from the project root and import it directly into phpmyadmin or other mysql GUI. Connection parameters are configured in file "db-config.js", where user may adjust the values to connect to their own mysql server. This step will have set up a database called `delilah_db_carlosDWFS`.
2. From the project root, run `npm install`. After installing dependencies, run `npm run devStart`. Database tables are created after running `npm run devStart`. DB will be functional at this point as the server is running.
 

### Requirements

1. Node 
2. mySQL

### Using the REST API

1. The API root is `/`. App is running on port 3310.

### Available endpoints

***1. Post product:***
Can only be executed by admin. Data will be passed as a JSON object in the body.

***2. Get all products:***
Must be logged in to access.

***3. Get product by id:***
Must be logged in to access. Id must be provided in path.

***4. Patch product:***
Can only be executed by admin. Id will be provided in path.

***5. Delete product:***
Can only be executed by admin. Id will be provided in path.

***6. Post user:***
User id is generated automatically.

***7. Get user by id:***
Admins can retrieve any user, but non admins can only retrieve their own by providing their corresponding Id. Id will be provided in path.

***8. Delete user:***
Can only be executed by admin. Id will be provided in path.

***9. Login:***
Receives a JSON object with the email and password associated with user account. Returns a token.

***10. Post order:***
Order is created with a default status of new. User most be logged in. Order id will be generated automatically.

***11. Get all orders:***
Admins can see all orders, non admins only see their orders.

***12. Patch order status:***
Can only be executed by admin. The new status and the order id will be provided in a JSON object in body.



