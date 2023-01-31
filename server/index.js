//server
const express = require('express'),
//  routes
      pageRoutes = require('./routes/pages'),
      userRoutes = require('./routes/users'),
      contactRoutes = require('./routes/contact'),
      jobRoutes = require('./routes/jobs'),

      { authMiddleWare } = require('./controllers/users'),
 
      app = express(),
      config = require('./config'),
      { errorHandler } = require('./middlewares'),
      mongoose = require('mongoose'),

      FakeDb = require('./fakeDB/FakeDB'),

      PORT = process.env.PORT || 3001;

      mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, 
      (err) => {
        if (err) {
          console.log('server/index ', err);
        }
        //default database data
        // if(process.env.NODE_ENV !== 'production'){
        //   const fakeDb = new FakeDb();
        //   fakeDb.populate();
        //   console.log('Fake DB');
        // }
        console.log("Connected to DB!");
      });

//Middleware
app.use(express.json());
app.use(errorHandler);

//Custom Middleware can be used in routes or other app.use, app.get ect.
app.get('/api/v1/secret', authMiddleWare, (req, res) =>  {
  const user = res.locals.user;
  return res.json({message: `Secret message don't share ${user.username}`})
});

//users
app.use('/api/v1/users', userRoutes);

//pages
app.use('/api/v1/pages', pageRoutes);

//contact
app.use('/api/v1/contact', contactRoutes);

//jobs
// app.use('/api/v1/admin', jobRoutes);
app.use('/api/v1/job', jobRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});  

