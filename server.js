const express = require('express');
const path = require('path');
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>express frame work</h1>")
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(2000, () => {
    console.log("server is running");

})