const dotenv = require("dotenv");
dotenv.config();


const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');


const app = express();

//my routes requirements
const authRoutes = require("./app/routes/auth");
const userRoutes = require("./app/routes/user");
const productRoutes = require("./app/routes/product");
const orderRoutes = require("./app/routes/order");
  
//DB connections
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,  
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected succesfully");
  });

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
 



//my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api', index);
app.get('*', (req, res) => {
  res.sendFile('build/index.html', { root: global });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;