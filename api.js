const mongoose = require('mongoose');
const express = require('express');
const login = require('./schema/login')
const app = express()
const cors = require('cors');
const bodyparser = require('body-parser');

const corsorigin = {
    origin:'http://localhost:3001'
}


app.use(cors(corsorigin))
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect('mongodb://0.0.0.0:27017/demo')
    .then(() => {
        console.log('connection');
    })
    .catch(() => {
        console.log('connection err');
    })

app.get('/find', async (req, res) => {
    const data = await login.find(req.body)
    res.send(data)
})


app.post('/create', async (req, res) => {
    const data = await login.create({
        Email: req.body.Email,
        Password: req.body.Password
    })
    res.send(data)
})


app.get('/find/:_id', async (req, res) => {
    const data = await login.findById(req.params._id)
    res.send(data)
})




app.put('/put/:_id', async (req, res) => {
    const data = await login.updateOne(req.params, {
        $set: {
            Email: req.body.Email,
            Password: req.body.Password
        }
    })
    res.send(data)
})


app.delete('/remove/:_id', async (req, res) => {
    const data = await login.deleteOne(req.params)
    res.send(data)
})

app.listen(5000, () => {
    console.log('server is running on port 5000');

})