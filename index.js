const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req, res) => {
    res.send("Login Page")
})

app.get("/register", (req, res) => {
    res.send("<h1>Register Page</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
