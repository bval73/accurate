//server
const express = require('express'),
//  routes
      rentalRoutes = require('./routes/rentals'),
      pageRoutes = require('./routes/pages'),
      userRoutes = require('./routes/users'),
      contactRoutes = require('./routes/contact'),

      {authMiddleWare} = require('./controllers/users'),
 
      app = express(),
      config = require('./config'),
      { errorHandler } = require('./middlewares');
      mongoose = require('mongoose'),

      FakeDb = require('./fakeDB/FakeDB'),
//  models  
    //  Rental = require('./models/rental'),

      PORT = process.env.PORT || 3001;

      mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, 
      (err) => {
        if (err) {
          console.log('server/index ', err);
        }
        if(process.env.NODE_ENV !== 'production'){
          const fakeDb = new FakeDb();
          fakeDb.populate();
          console.log('Fake DB');
        }
        console.log("Connected to DB!");
      });

//Middleware
app.use(express.json());
app.use(errorHandler);

//Custom Middleware can be used in routes or other app.use, app.get ect.
app.get('/api/v1/secret', authMiddleWare, (req, res) =>  {
  // console.log('/api/v1/secret', res.locals);
  const user = res.locals.user;
  return res.json({message: `Secret message don't share ${user.username}`})
});

//rentals
app.use('/api/v1/rentals', rentalRoutes);

//user
app.use('/api/v1/users', userRoutes);

//pages
app.use('/api/v1/pages', pageRoutes);

//contact
app.use('/api/v1/contact', contactRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});  
