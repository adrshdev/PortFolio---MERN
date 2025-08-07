const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRoutes');

const app = express();

app.use('/admin', adminRouter);
app.use(express.json());

mongoose.connect('mongodb+srv://adarshjayasankerdev:portfolio@cluster0.cbbqzjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  app.listen(5000, () => {
    console.log('Server is running on PORT 5000 and MongoDB connected successfully');
  })
})
.catch((err) => {
  console.error('Error connecting MongoDB', err)
})