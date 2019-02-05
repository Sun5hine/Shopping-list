const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

// routers GET api/item
// @desc GET ALL Item
// @access public

router.get('/', (req, res) => {
  Item.find()
   .sort({ date: -1 })
   .then(items => res.json(items)
});

module.exports = router;
