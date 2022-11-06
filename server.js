//load dependencies 
const express = require("express")


// /set port 
const app = express()
app.listen("9000", () => {
    console.log("server start ")
});

module.exports