const express = require("express");
const dotenv = require("dotenv");


const app = express();
dotenv.config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hey TODO!")
})


app.listen(PORT, () => {
    console.log(`Server up and running on port: ${PORT}`);
})

