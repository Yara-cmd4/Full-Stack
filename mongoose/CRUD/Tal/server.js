const express = require('express');
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());


require('dotenv').config()



const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})