const express = require('express');
const router = express.Router();
const { connectToDatabase } = require('../config/db');

router.get('/all-products', async (req, res) => {
  try {
    const p = req.query;
    console.log(p);
    const db = await connectToDatabase(); // Reuse the existing database instance
    const productsCollection = db.collection('products'); // Replace with your collection name
    const products = await productsCollection.find({}).toArray();
    res.json(products);
  } catch (error) {
    console.error('Failed to retrieve products', error);
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
});

module.exports = router;
