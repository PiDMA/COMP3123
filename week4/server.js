const { application } = require('express');
const express = require('express');

const app = express();

const SERVER_PORT = 8081;

app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
})

app.get("/user", (req, res) => {
  var user = {
    first_name: "David",
    last_name: "Pinto",
  }
  res.send(user);
})

  
app.post("/user", (req, res) => {
    const person_firstName = req.query.first_name;
    const person_lastName = req.query.last_name;
    console.log(req.query);
    res.send({
        person_firstName,
        person_lastName
    })
});

  
app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port ${SERVER_PORT}`);
})