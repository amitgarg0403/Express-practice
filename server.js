// requiring express
const express = require("express");
const app = express();



// creating a get request for Home page
app.get("/", function (req, res){ res.send("Hello World")});

// creating a get request for about page
app.get("/about", function (req, res){ res.send("My name is Amit")});

// creating a get request for contact page
app.get("/contact", function (req, res){ res.send("Contact me at amit@gmail.com")});

// listening port 
app.listen(3000, function(){console.log("Server started at Port 3000")});
