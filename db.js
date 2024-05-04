const mongoose = require("mongoose");
// Use dotenv to load environment variables
//const mongoURL = `mongodb://localhost:27017`;
const mongoURL = `mongodb+srv://doctor123:doctor123@cluster0.nnxbqud.mongodb.net/mern-pizza`;

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongo DB connection successful');
});

db.on('error', (error) => {
  console.error('Mongo DB connection failed:', error);
});

db.on('disconnected', () => {
  console.log('Mongo DB disconnected');
});

module.exports = mongoose;
