
var express = require("express");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 5000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    return res.send("You are on the homepage");
});

app.post("/post", function(req,res) {

    var userInfo = req.body;
    console.log(userInfo);

    return res.send("Welcome "+ userInfo.user);
});

app.delete("/delete", function(req,res) {
    var taskID = req.body;
    console.log(taskID);

    //return res.send("{delete: true}");
    return res.json({delete: true});
});

app.put("/put/:ID", function(req,res) {

    var ID = req.params.ID;
    console.log(ID);

    return res.send("Task " + ID + " has been updated"); 
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
