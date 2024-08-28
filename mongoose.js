const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/image')
.then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

  const userschema= new mongoose.Schema({
    name:String,
    image:String
  })

  const usermodel= mongoose.model("imageuploads",userschema)
  module.exports=usermodel