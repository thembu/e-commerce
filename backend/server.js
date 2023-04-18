const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const authRoute = require("./routes/auth");
require("./database");
const port = 3001;

//registers midddleware -> is a function which is called during the lifecycle of the request

// all midddleware used in the api
app.use(express.json()); // to read json input
app.use(bodyparser.json()); // to parse json input
app.use(bodyparser.urlencoded({extended : true})) 


app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log("running server");
});
