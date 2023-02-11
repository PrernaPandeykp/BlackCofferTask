const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const axios = require('axios');
const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {
  MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('dashboard');
    const collection = db.collection('data');
    collection.find({}).toArray((err, data) => {
      res.send(data);
    });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
