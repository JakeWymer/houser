const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
const port = 5000;

massive(process.env.DB_STRING)
  .then(db => {
    app.set('db', db);
    console.log('Connected to DB');
  })
  .catch(err => console.log(err));

app.use(json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});