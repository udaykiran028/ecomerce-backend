const express = require('express');
const productsRoute = require('./API/productApi');

const app = express();
app.use(express.json());
app.use('/products', productsRoute);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
