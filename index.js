const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

// @@ mongodb connection @@
//                              userid:userpw
mongoose.connect('mongodb+srv://doyun:doyun@cluster0.uiudz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo DB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send(`Hello World! 하이`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))