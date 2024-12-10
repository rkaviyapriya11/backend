// Create server with http
// const http = require('http')

// Create html Template
// http.createServer(function (req, res) {
//     res.write('Hello world')
//     res.end()
//     // Create local hosting data
// }).listen(8000, () => {
//     console.log("server is running");

// })





// file system

const fs = require('fs');

fs.writeFile('sample.html', '<h1>Hello world</h1>', (err) => {
    console.log(err);
})

fs.readFile('sample.html', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
})


// delete
// fs.unlinkSync('sample.html')
