const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')

dotenv.config()


mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("mongoDB connected");
})


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/api/',authRoute)



app.use(function(err, req, res, next) {
    
  
    // render the error page
    console.log("error consoling");
    console.log(err);
    res.status(500);
    res.json('error');
  });

  const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server is running`);
})