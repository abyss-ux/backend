//console.log("Backend is running")
require('dotenv').config(); 
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('This is Twitter')

})

app.get('/google',(req,res)=>{
    res.send('This is Google')

})
app.get('/youtube',(req,res)=>{
    res.send('This is Youtube')
})
const jsonData = {
  "users": [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "email": "aarav.sharma@example.com",
      "age": 21,
      "role": "user",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Priya Verma",
      "email": "priya.verma@example.com",
      "age": 23,
      "role": "admin",
      "isActive": true
    },
    {
      "id": 3,
      "name": "Rohan Mehta",
      "email": "rohan.mehta@example.com",
      "age": 20,
      "role": "user",
      "isActive": false
    }
  ]
}

app.get('/json',(req,res)=>{
    res.json(jsonData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
