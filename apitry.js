const mongoose = require('mongoose')
const express = require('express')
const logintry = require('./schema/logintry')
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

// Link Frotend
const corsorigin = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsorigin))
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect('mongodb+srv://rkaviyapriya11:kaviyapriya@cluster0.msreg.mongodb.net/sample')
    .then(() => {
        console.log('Connecting by kaviya ')
    })
    .catch(() => {
        console.log('Connection Error')
    })

app.get('/find', async (req, res) => {
    const data = await logintry.find(req.body)
    res.send(data)
})
app.post('/add', async (req, res) => {
    const data = await logintry.create(req.body)
    res.send(data)
})

app.get('/find/:_id', async (req, res) => {
    const data = await logintry.findById(req.params._id)
    res.send(data)
})


app.put('/changes/:_id', async (req, res) => {
    const data = await logintry.updateOne(req.params, {
        $set: {
            Name: req.body.Name,
            Course: req.body.Course,
            Certifynum:req.body.Certifynum
        }
    })
    res.send(data)
})
app.delete('/remove/:_id', async (req, res) => {
    const data = await logintry.deleteOne(req.params)
    res.send(data)
})

app.listen(2301, () => {
    console.log("server is running port:2300")
})

// http://localhost:3000/update/2

