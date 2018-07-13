const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const controller = require('./controller');

const app = express();
const port = 5000;

massive(process.env.DB_STRING)
  .then(db => {
    app.set('db', db);
    app.get('db').alter_houses_columns()
      .then(() => console.log('COLUMNS ADDED'))
      .catch(err => console.log(err));
      
    console.log('Connected to DB');
  })
  .catch(err => console.log(err));

app.use(json());

app.get('/api/houses', controller.getHouses);
app.post('/api/houses', controller.addHouse);
app.delete('/api/house/:id', controller.deleteHouse);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});