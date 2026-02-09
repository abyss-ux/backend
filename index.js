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


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
