const express = require('express')
const app = express()
const axios = require('axios');
const AcousticStand = require('./models/AcousticStand');


const seeder = require('./models/seed')
require('./config/db')

const PORT = 8000

app.use(express.urlencoded())
app.use(express.json())

seeder()

app.post('/upload-products', async (req, res) => {
    try {
      const products = await AcousticStand.find();
  
      const ozonProducts = products.map((product) => {
        return {
          attributes: product.attributes,
          barcode: product.barcode,
          category_id: product.category_id,
          color_image: product.color_image,
          complex_attributes: product.complex_attributes,
          currency_code: product.currency_code,
          depth: product.depth,
          dimension_unit: product.dimension_unit,
          height: product.height,
          images: product.images,
          images360: product.images360,
          name: product.name,
          offer_id: product.offer_id,
          old_price: product.old_price,
          pdf_list: product.pdf_list,
          premium_price: product.premium_price,
          price: product.price,
          primary_image: product.primary_image,
          vat: product.vat,
          weight: product.weight,
          weight_unit: product.weight_unit,
          width: product.width,
        };
      });
  
      const response = await axios.post('https://api-seller.ozon.ru/v2/product/import', {
        items: ozonProducts,
      }, {
        headers: {
          'Client-Id': '',
          'Api-Key': '',
        },
      });

      res.json(response.data);
    } catch (error) {
      console.error('Error uploading products:', error);
      res.status(500).json({ error: 'Failed to upload products' });
    }
  });


app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})
