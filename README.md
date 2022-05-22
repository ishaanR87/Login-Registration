# About
Login/Registration Web Application using Node, Express, Bycript and Redis

## Description
The assignment consists of creating an online application using Node, Express, Bycript and Redis. The application has to allow users to register and use a password. Once they are registered they can log in to the system and perform store in the system their personal data. 

## Technologies Used 
-	MongoDB to store the users.
-	Node to create the server where the website is stored.
-	Redis to manage the sessions with the users.
-	Bootstrap and JQuery for the front-end
-	Bycript for creating a hash of the passwords

## To Run
1. Run database (MongoDB): <br />
**mongod --dbpath=**

2. Run Redis: <br />
**redis-server** or in my case, use Windows Subsystem for Linux and install redis server

3. Run App: <br />
**node app.js**
