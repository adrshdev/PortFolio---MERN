const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRouter = require('./routes/adminRoutes');
const path = require('path');
const userRouter = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://adrshdev.netlify.app',
  credentials: true,
}));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/admin', adminRouter);
app.use('/', userRouter);


mongoose.connect('mongodb+srv://adarshjayasankerdev:portfolio@cluster0.cbbqzjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
  app.listen(5000, () => {
    console.log('Server is running on PORT 5000 and MongoDB connected successfully');
  })
})
.catch((err) => {
  console.error('Error connecting MongoDB', err)
})