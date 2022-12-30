const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect Database
mongoose.connect("mongodb+srv://prasanna:prasanna2204@cluster0.nvxqdgw.mongodb.net/workschedule?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }).then(()=>{
       console.log('MongoDB Connected...');
    }).catch((err)=>{
      console.log(err)
    })

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/todos', require('./routes/api/todos'));
app.use('/api/tags', require('./routes/api/tags'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

