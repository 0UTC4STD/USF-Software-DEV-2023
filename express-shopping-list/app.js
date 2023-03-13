const express = require('express');
const bodyParser = require('body-parser');
const items = require('./fakeDb');
const ExpressError = require('./expressError');

const app = express();
app.use(bodyParser.json());

// GET /items - get all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items - add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.json({ added: newItem });
});

// GET /items/:name - get a single item by name
app.get('/items/:name', (req, res, next) => {
  const name = req.params.name;
  const foundItem = items.find(item => item.name === name);
  if (foundItem) {
    res.json(foundItem);
  } else {
    throw new ExpressError('Item not found', 404);
  }
});

// PATCH /items/:name - update a single item by name
app.patch('/items/:name', (req, res, next) => {
  const name = req.params.name;
  const newItem = req.body;
  const foundIndex = items.findIndex(item => item.name === name);
  if (foundIndex !== -1) {
    items[foundIndex] = { ...items[foundIndex], ...newItem };
    res.json({ updated: items[foundIndex] });
  } else {
    throw new ExpressError('Item not found', 404);
  }
});

// DELETE /items/:name - delete a single item by name
app.delete('/items/:name', (req, res, next) => {
  const name = req.params.name;
  const foundIndex = items.findIndex(item => item.name === name);
  if (foundIndex !== -1) {
    items.splice(foundIndex, 1);
    res.json({ message: 'Deleted' });
  } else {
    throw new ExpressError('Item not found', 404);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res.status(status).json({ error: message });
});

app.listen(3000, () => {
  console.log('Hello I will be you Server 3000 this evening');
});