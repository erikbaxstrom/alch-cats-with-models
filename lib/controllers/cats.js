const { Router } = require('express');
const CartoonCat = require('../models/CartoonCat.js');
// const { cats } = require('../cats-data');

// TODO -- update this file to use your database and models instead of hard-coded cats data
// all tests should still pass
module.exports = Router()
  .get('/', async (req, res) => {
    const cats = await CartoonCat.getAll();
    const filtered = cats.map(({ id, name }) => ({ id, name }));

    res.json(filtered);
  })
  .get('/:id', (req, res) => {
    // const cat = cats.find((cat) => cat.id === req.params.id);
    // res.json(cat);
  });
