const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const shopRoute = require('./routers/shopRouter.js')
const userRoute = require('./routers/userRouter.js')

const app = express();
app.use(cors());
app.use(bodyParser.json());

const checkMongoose = (req, res) => {
  try {
    mongoose.connect("mongodb+srv://test:test@cluster0.btmfy2x.mongodb.net/artGallery?retryWrites=true&w=majority")
    console.log('Mongoose connected')
  } catch (error) {
    console.log(error);
  }
};

app.use('/api/shop',shopRoute)
app.use('/api/user',userRoute)

app.listen(3001, () => {
  console.log("server works !");
  checkMongoose()
});
