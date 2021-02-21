const express = require('express')
const app = express()
const port = 5000
const bodyPaser = require('body-parser')
const { User } = require("./models/User")


// application/x-www-form-urlencoded 해석
app.use(bodyPaser.urlencoded({extended: true}));

// application/json 해석
app.use(bodyPaser.json());


const mongoose = require('mongoose')

// @@ mongodb connection @@
//                              userid:userpw
mongoose.connect('mongodb+srv://doyun:doyun@cluster0.uiudz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('Mongo DB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send(`Hello World!.`))


app.post('/register', (req, res) => {
  // 회원 가입 시 필요한 정보들을 client에서 가져오면
  // 그것들을 DB에 넣어준다.


    const user = new User(req.body)

    // user 모델에 req.body에서 파싱한 정보를 저장
    user.save((err, doc) => {
      if(err) return res.json({ success: false, err })
      return res.status(200).json({
        success: true
      })
    })

  
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))