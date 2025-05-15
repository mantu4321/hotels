const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB Connections URL
// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';
const mongoURL = process.env.MONGODB_URL;

// SetUp MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
   useUnifiedTopology: true
})
.then(() => {
    console.log('Connceted to MOngoDB');
})
.catch((error) => {
    console.log('Error conneting to MpngoDB', error);
})




// Get the default connection 
// Mongoose maitains a default connection
const db = mongoose.connection;


db.on('connected', ()=>{
    console.log('Connected to MongoDB server');
});

db.on('error', (err)=>{
    console.log('MongoDB connection error:', err);
});
db.on('disconnected', ()=>{
    console.log("MongoDB disconnected");
});
// Exports the database connection
module.exports = db;