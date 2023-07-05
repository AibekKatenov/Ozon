const mongoose = require('mongoose');

const AcousticStandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  offer_id: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  vat: { type: Number, required: true },
  depth: { type: Number, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true },
  dimension_unit: { type: String, required: true },
  weight: { type: Number, required: true },
  weight_unit: { type: String, required: true },
  attributes: [
    {
      complex_id: { type: Number, default: 0 },
      id: { type: Number, required: true },
      values: [
        {
          dictionary_value_id: { type: Number },
          value: { type: String, required: true }
        }
      ]
    }
  ],
  barcode: { type: String },
  category_id: { type: Number, required: true },
  color_image: { type: String },
  complex_attributes: [
    {
      
    }
  ],
  currency_code: { type: String },
  images: [{ type: String }],
  images360: [{ type: String }],
  primary_image: { type: String },
  vat: { type: Number, required: true },
  weight: { type: Number, required: true },
  weight_unit: { type: String, required: true },
  width: { type: Number, required: true },
});

const AcousticStand = mongoose.model('AcousticStand', AcousticStandSchema);

module.exports = AcousticStand;
