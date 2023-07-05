const mongoose = require("mongoose");
const AcousticStand = require("./AcousticStand");


async function seeder(){
const some = await AcousticStand.find({offer_id: "acoustic001"}).count()
if(some == 0 ){
const acousticStand1 = new AcousticStand({
  name: "Стойка для акустической системы 1",
  offer_id: "acoustic001",
  price: 99.99,
  vat: 20,
  depth: 10,
  width: 20,
  height: 30,
  dimension_unit: "cm",
  weight: 500,
  weight_unit: "g",
  attributes: [
    {
      complex_id: 0,
      id: 5076,
      values: [
        {
          dictionary_value_id: 971082156,
          value: "Стойка для акустической системы",
        },
      ],
    },
    {
      complex_id: 0,
      id: 85,
      values: [
        {
          dictionary_value_id: 5060050,
          value: "Samsung",
        },
      ],
    },
  ],
  barcode: "112772873170",
  category_id: 17033876,
});

const acousticStand2 = new AcousticStand({
  name: "Стойка для акустической системы 2",
  offer_id: "acoustic002",
  price: 149.99,
  vat: 20,
  depth: 15,
  width: 25,
  height: 35,
  dimension_unit: "cm",
  weight: 700,
  weight_unit: "g",
  attributes: [
    {
      complex_id: 0,
      id: 5076,
      values: [
        {
          dictionary_value_id: 971082156,
          value: "Стойка для акустической системы",
        },
      ],
    },
    {
      complex_id: 0,
      id: 85,
      values: [
        {
          dictionary_value_id: 5060050,
          value: "Samsung",
        },
      ],
    },
  ],
  barcode: "112772873171",
  category_id: 17033876,
});

// Сохранение товаров в базу данных
Promise.all([acousticStand1.save(), acousticStand2.save()])
  .then(() => {
    console.log("Tovars have been added to the database");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error saving tovars:", error);
    mongoose.connection.close();
  });
}
}

module.exports=seeder