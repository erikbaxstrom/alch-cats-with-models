const { Router } = require('express');
const CartoonCat = require('../models/CartoonCat.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const cat = await CartoonCat.getCatById(req.params.id);
    res.json(cat);
  })
  .get('/', async (req, res) => {
    const cats = await CartoonCat.getAll();
    const filtered = cats.map(({ id, name }) => ({ id, name }));

    res.json(filtered);
  });
