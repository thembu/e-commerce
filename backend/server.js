const express = require("express");

const app = express();

const port = 3001;

//registers midddleware -> is a function which is called during the lifecycle of the request

app.use(express.json())
app.use(express.urlencoded())

app.listen(port, () => {
  console.log("running server");
});

const groceriesList = [];

//get requests

app.get("/groceries", (req, res) => {
    res.send(groceriesList)
});

//post request

app.post("/groceries", (req, res, next) => {
    console.log(req.body);
    groceriesList.push(req.body)
    res.send(201)
});
