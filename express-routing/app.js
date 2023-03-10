// Yeah I noticed after the fact that my node_modules is also in here let's just ignore it and get some answers
// http://localhost:3000/mean?nums=1,2,3,4,4,100
// http://localhost:3000/median?nums=1,2,3,4,4,100
// http://localhost:3000/mode?nums=1,2,3,4,4,100

const express = require('express');
const app = express();
const port = 3000;

const { ExpressError } = require('./expressError');
const { calculateMean, calculateMedian, calculateMode } = require('./formulas');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for calculating the mean
app.get('/mean', function(req, res, next) {
    try {
      const nums = req.query.nums.split(',').map(Number);
      if (!nums.every(Number.isFinite)) {
        throw new ExpressError('Invalid input', 400);
      }
      const result = calculateMean(nums);
      return res.send(`The mean of ${nums} is ${result}`);
    } catch(err) {
      return next(err);
    }
  });
  
  // Route for calculating the median
  app.get('/median', function(req, res, next) {
    try {
      const nums = req.query.nums.split(',').map(Number);
      if (!nums.every(Number.isFinite)) {
        throw new ExpressError('Invalid input', 400);
      }
      const result = calculateMedian(nums);
      return res.send(`The median of ${nums} is ${result}`);
    } catch(err) {
      return next(err);
    }
  });
  
  // Route for calculating the mode
  app.get('/mode', function(req, res, next) {
    try {
      const nums = req.query.nums.split(',').map(Number);
      if (!nums.every(Number.isFinite)) {
        throw new ExpressError('Invalid input', 400);
      }
      const result = calculateMode(nums);
      return res.send(`The mode of ${nums} is ${result}`);
    } catch(err) {
      return next(err);
    }
  });


// Error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong!';

  res.status(status).send({ error: message });
});

app.listen(port, () => {
  console.log(`Hello I will be your server 3000 this evening`);
});