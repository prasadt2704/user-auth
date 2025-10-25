const express = require('express');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const { connectToMongoDB } = require('./config');

const app = express();
const PORT = 3001;

connectToMongoDB().then(() => console.log('MongoDB Connected'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/', router);


app.listen(PORT, () => {
  console.log(`Server Started on: ${PORT}`)
});