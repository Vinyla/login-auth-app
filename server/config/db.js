require('dotenv').config();
const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

const connectDB = async () => {
  try {
     mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;