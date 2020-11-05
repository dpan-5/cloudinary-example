const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Flower = require('./models/image');

const app = express();
app.use(cors());
app.use(express.json());

const db = 'mongodb://localhost/react_image';
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB ...');
  })
  .catch(err => {
    console.error('Could not Connect to MongoDb !!!', err);
  });

app.listen(3001, () => {
  console.log('Server Started on Port 3001 ....');
});


app.get('/', (req, res) => {
  res.send('Testing 123');
});

app.post('/upload', async (req, res) => {
    // console.log(req);
    try {
      const newImage = new Flower({
        imageUrl: req.body.imageUrl
      });
      await newImage.save();
      res.json(newImage.imageUrl);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  });

  app.get('/getLatest', async (req, res) => {
    const getImage = await Flower.findOne().sort({ _id: -1 });
    res.json(getImage.imageUrl);
  });