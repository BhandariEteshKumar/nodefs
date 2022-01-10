// Creating  db product
// use product
// insert data into product table
db.products.insertMany([
  {
    id: "1",
    product_name: "Intelligent Fresh Chips",
    product_price: 655.0,
    product_material: "Concrete",
    product_color: "mint green",
  },
  {
    id: "2",
    product_name: "Practical Fresh Sausages",
    product_price: 911.0,
    product_material: "Cotton",
    product_color: "indigo",
  },
  {
    id: "3",
    product_name: "Refined Steel Car",
    product_price: 690.0,
    product_material: "Rubber",
    product_color: "gold",
  },
  {
    id: "4",
    product_name: "Gorgeous Plastic Pants",
    product_price: 492.0,
    product_material: "Soft",
    product_color: "plum",
  },
  {
    id: "5",
    product_name: "Sleek Cotton Chair",
    product_price: 33.0,
    product_material: "Fresh",
    product_color: "black",
  },
  {
    id: "6",
    product_name: "Awesome Wooden Towels",
    product_price: 474.0,
    product_material: "Plastic",
    product_color: "orange",
  },
  {
    id: "7",
    product_name: "Practical Soft Shoes",
    product_price: 500.0,
    product_material: "Rubber",
    product_color: "pink",
  },
  {
    id: "8",
    product_name: "Incredible Steel Hat",
    product_price: 78.0,
    product_material: "Rubber",
    product_color: "violet",
  },
  {
    id: "9",
    product_name: "Awesome Wooden Ball",
    product_price: 28.0,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    id: "10",
    product_name: "Generic Wooden Pizza",
    product_price: 84.0,
    product_material: "Frozen",
    product_color: "indigo",
  },
  {
    id: "11",
    product_name: "Unbranded Wooden Cheese",
    product_price: 26.0,
    product_material: "Soft",
    product_color: "black",
  },
  {
    id: "12",
    product_name: "Unbranded Plastic Salad",
    product_price: 89.0,
    product_material: "Wooden",
    product_color: "pink",
  },
  {
    id: "13",
    product_name: "Gorgeous Cotton Keyboard",
    product_price: 37.0,
    product_material: "Concrete",
    product_color: "sky blue",
  },
  {
    id: "14",
    product_name: "Incredible Steel Shirt",
    product_price: 54.0,
    product_material: "Metal",
    product_color: "white",
  },
  {
    id: "15",
    product_name: "Ergonomic Cotton Hat",
    product_price: 43.0,
    product_material: "Rubber",
    product_color: "mint green",
  },
  {
    id: "16",
    product_name: "Small Soft Chair",
    product_price: 47.0,
    product_material: "Cotton",
    product_color: "teal",
  },
  {
    id: "17",
    product_name: "Incredible Metal Car",
    product_price: 36.0,
    product_material: "Fresh",
    product_color: "indigo",
  },
  {
    id: "18",
    product_name: "Licensed Plastic Bacon",
    product_price: 88.0,
    product_material: "Steel",
    product_color: "yellow",
  },
  {
    id: "19",
    product_name: "Intelligent Cotton Chips",
    product_price: 46.0,
    product_material: "Soft",
    product_color: "azure",
  },
  {
    id: "20",
    product_name: "Handcrafted Wooden Bacon",
    product_price: 36.0,
    product_material: "Concrete",
    product_color: "lime",
  },
  {
    id: "21",
    product_name: "Unbranded Granite Chicken",
    product_price: 90.0,
    product_material: "Metal",
    product_color: "gold",
  },
  {
    id: "22",
    product_name: "Ergonomic Soft Hat",
    product_price: 99.0,
    product_material: "Rubber",
    product_color: "black",
  },
  {
    id: "23",
    product_name: "Intelligent Steel Pizza",
    product_price: 95.0,
    product_material: "Cotton",
    product_color: "azure",
  },
  {
    id: "24",
    product_name: "Tasty Rubber Cheese",
    product_price: 47.0,
    product_material: "Frozen",
    product_color: "orchid",
  },
  {
    id: "25",
    product_name: "Licensed Steel Car",
    product_price: 20.0,
    product_material: "Cotton",
    product_color: "indigo",
  },
]);

// Find the product price which are between 400 to 800
db.products.find({
  product_price: {
    $gte: 400,
    $lte: 900,
  },
});

// Output:
// [
//   {
//     "_id": ObjectId("5a934e000102030405000000"),
//     "id": "1",
//     "product_color": "mint green",
//     "product_material": "Concrete",
//     "product_name": "Intelligent Fresh Chips",
//     "product_price": 655
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000002"),
//     "id": "3",
//     "product_color": "gold",
//     "product_material": "Rubber",
//     "product_name": "Refined Steel Car",
//     "product_price": 690
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000003"),
//     "id": "4",
//     "product_color": "plum",
//     "product_material": "Soft",
//     "product_name": "Gorgeous Plastic Pants",
//     "product_price": 492
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000005"),
//     "id": "6",
//     "product_color": "orange",
//     "product_material": "Plastic",
//     "product_name": "Awesome Wooden Towels",
//     "product_price": 474
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000006"),
//     "id": "7",
//     "product_color": "pink",
//     "product_material": "Rubber",
//     "product_name": "Practical Soft Shoes",
//     "product_price": 500
//   }
// ]

// Find the product price which are not between 400 to 600
db.products.find({
  $or: [
    {
      product_price: {
        $lt: 400,
      },
    },
    {
      product_price: {
        $gt: 600,
      },
    },
  ],
});

// Output :
//[
//   {
//     "_id": ObjectId("5a934e000102030405000000"),
//     "id": "1",
//     "product_color": "mint green",
//     "product_material": "Concrete",
//     "product_name": "Intelligent Fresh Chips",
//     "product_price": 655
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000001"),
//     "id": "2",
//     "product_color": "indigo",
//     "product_material": "Cotton",
//     "product_name": "Practical Fresh Sausages",
//     "product_price": 911
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000002"),
//     "id": "3",
//     "product_color": "gold",
//     "product_material": "Rubber",
//     "product_name": "Refined Steel Car",
//     "product_price": 690
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000004"),
//     "id": "5",
//     "product_color": "black",
//     "product_material": "Fresh",
//     "product_name": "Sleek Cotton Chair",
//     "product_price": 33
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000007"),
//     "id": "8",
//     "product_color": "violet",
//     "product_material": "Rubber",
//     "product_name": "Incredible Steel Hat",
//     "product_price": 78
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000008"),
//     "id": "9",
//     "product_color": "azure",
//     "product_material": "Soft",
//     "product_name": "Awesome Wooden Ball",
//     "product_price": 28
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000009"),
//     "id": "10",
//     "product_color": "indigo",
//     "product_material": "Frozen",
//     "product_name": "Generic Wooden Pizza",
//     "product_price": 84
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000a"),
//     "id": "11",
//     "product_color": "black",
//     "product_material": "Soft",
//     "product_name": "Unbranded Wooden Cheese",
//     "product_price": 26
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000b"),
//     "id": "12",
//     "product_color": "pink",
//     "product_material": "Wooden",
//     "product_name": "Unbranded Plastic Salad",
//     "product_price": 89
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000c"),
//     "id": "13",
//     "product_color": "sky blue",
//     "product_material": "Concrete",
//     "product_name": "Gorgeous Cotton Keyboard",
//     "product_price": 37
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000d"),
//     "id": "14",
//     "product_color": "white",
//     "product_material": "Metal",
//     "product_name": "Incredible Steel Shirt",
//     "product_price": 54
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000e"),
//     "id": "15",
//     "product_color": "mint green",
//     "product_material": "Rubber",
//     "product_name": "Ergonomic Cotton Hat",
//     "product_price": 43
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000f"),
//     "id": "16",
//     "product_color": "teal",
//     "product_material": "Cotton",
//     "product_name": "Small Soft Chair",
//     "product_price": 47
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000010"),
//     "id": "17",
//     "product_color": "indigo",
//     "product_material": "Fresh",
//     "product_name": "Incredible Metal Car",
//     "product_price": 36
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000011"),
//     "id": "18",
//     "product_color": "yellow",
//     "product_material": "Steel",
//     "product_name": "Licensed Plastic Bacon",
//     "product_price": 88
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000012"),
//     "id": "19",
//     "product_color": "azure",
//     "product_material": "Soft",
//     "product_name": "Intelligent Cotton Chips",
//     "product_price": 46
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000013"),
//     "id": "20",
//     "product_color": "lime",
//     "product_material": "Concrete",
//     "product_name": "Handcrafted Wooden Bacon",
//     "product_price": 36
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000014"),
//     "id": "21",
//     "product_color": "gold",
//     "product_material": "Metal",
//     "product_name": "Unbranded Granite Chicken",
//     "product_price": 90
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000015"),
//     "id": "22",
//     "product_color": "black",
//     "product_material": "Rubber",
//     "product_name": "Ergonomic Soft Hat",
//     "product_price": 99
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000016"),
//     "id": "23",
//     "product_color": "azure",
//     "product_material": "Cotton",
//     "product_name": "Intelligent Steel Pizza",
//     "product_price": 95
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000017"),
//     "id": "24",
//     "product_color": "orchid",
//     "product_material": "Frozen",
//     "product_name": "Tasty Rubber Cheese",
//     "product_price": 47
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000018"),
//     "id": "25",
//     "product_color": "indigo",
//     "product_material": "Cotton",
//     "product_name": "Licensed Steel Car",
//     "product_price": 20
//   }
// ]

// List the four product which are grater than 500 in price
db.products.find({ product_price: { $gt: 500 } }).limit(5);

// Output
// [
//   {
//     "_id": ObjectId("5a934e000102030405000000"),
//     "id": "1",
//     "product_color": "mint green",
//     "product_material": "Concrete",
//     "product_name": "Intelligent Fresh Chips",
//     "product_price": 655
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000001"),
//     "id": "2",
//     "product_color": "indigo",
//     "product_material": "Cotton",
//     "product_name": "Practical Fresh Sausages",
//     "product_price": 911
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000002"),
//     "id": "3",
//     "product_color": "gold",
//     "product_material": "Rubber",
//     "product_name": "Refined Steel Car",
//     "product_price": 690
//   }
// ]

// Find the product name and product material of each products
db.products.find(
  {},
  {
    product_name: 1,
    product_material: 1,
  }
);

// Output:
// [
//   {
//     "_id": ObjectId("5a934e000102030405000000"),
//     "product_material": "Concrete",
//     "product_name": "Intelligent Fresh Chips"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000001"),
//     "product_material": "Cotton",
//     "product_name": "Practical Fresh Sausages"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000002"),
//     "product_material": "Rubber",
//     "product_name": "Refined Steel Car"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000003"),
//     "product_material": "Soft",
//     "product_name": "Gorgeous Plastic Pants"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000004"),
//     "product_material": "Fresh",
//     "product_name": "Sleek Cotton Chair"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000005"),
//     "product_material": "Plastic",
//     "product_name": "Awesome Wooden Towels"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000006"),
//     "product_material": "Rubber",
//     "product_name": "Practical Soft Shoes"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000007"),
//     "product_material": "Rubber",
//     "product_name": "Incredible Steel Hat"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000008"),
//     "product_material": "Soft",
//     "product_name": "Awesome Wooden Ball"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000009"),
//     "product_material": "Frozen",
//     "product_name": "Generic Wooden Pizza"
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000a"),
//     "product_material": "Soft",
//     "product_name": "Unbranded Wooden Cheese"
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000b"),
//     "product_material": "Wooden",
//     "product_name": "Unbranded Plastic Salad"
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000c"),
//     "product_material": "Concrete",
//     "product_name": "Gorgeous Cotton Keyboard"
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000d"),
//     "product_material": "Metal",
//     "product_name": "Incredible Steel Shirt"
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000e"),
//     "product_material": "Rubber",
//     "product_name": "Ergonomic Cotton Hat"
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000f"),
//     "product_material": "Cotton",
//     "product_name": "Small Soft Chair"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000010"),
//     "product_material": "Fresh",
//     "product_name": "Incredible Metal Car"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000011"),
//     "product_material": "Steel",
//     "product_name": "Licensed Plastic Bacon"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000012"),
//     "product_material": "Soft",
//     "product_name": "Intelligent Cotton Chips"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000013"),
//     "product_material": "Concrete",
//     "product_name": "Handcrafted Wooden Bacon"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000014"),
//     "product_material": "Metal",
//     "product_name": "Unbranded Granite Chicken"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000015"),
//     "product_material": "Rubber",
//     "product_name": "Ergonomic Soft Hat"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000016"),
//     "product_material": "Cotton",
//     "product_name": "Intelligent Steel Pizza"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000017"),
//     "product_material": "Frozen",
//     "product_name": "Tasty Rubber Cheese"
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000018"),
//     "product_material": "Cotton",
//     "product_name": "Licensed Steel Car"
//   }
// ]

// Find the product with a row id of 10
db.products.find({
  id: "10",
});
// Output
// [
//   {
//     "_id": ObjectId("5a934e000102030405000009"),
//     "id": "10",
//     "product_color": "indigo",
//     "product_material": "Frozen",
//     "product_name": "Generic Wooden Pizza",
//     "product_price": 84
//   }
// ]

// Find only the product name and product material
db.collection.find(
  {},
  {
    _id: 0,
    product_name: 1,
    product_material: 1,
  }
);
// Output:
// [
//   {
//     "product_material": "Concrete",
//     "product_name": "Intelligent Fresh Chips"
//   },
//   {
//     "product_material": "Cotton",
//     "product_name": "Practical Fresh Sausages"
//   },
//   {
//     "product_material": "Rubber",
//     "product_name": "Refined Steel Car"
//   },
//   {
//     "product_material": "Soft",
//     "product_name": "Gorgeous Plastic Pants"
//   },
//   {
//     "product_material": "Fresh",
//     "product_name": "Sleek Cotton Chair"
//   },
//   {
//     "product_material": "Plastic",
//     "product_name": "Awesome Wooden Towels"
//   },
//   {
//     "product_material": "Rubber",
//     "product_name": "Practical Soft Shoes"
//   },
//   {
//     "product_material": "Rubber",
//     "product_name": "Incredible Steel Hat"
//   },
//   {
//     "product_material": "Soft",
//     "product_name": "Awesome Wooden Ball"
//   },
//   {
//     "product_material": "Frozen",
//     "product_name": "Generic Wooden Pizza"
//   },
//   {
//     "product_material": "Soft",
//     "product_name": "Unbranded Wooden Cheese"
//   },
//   {
//     "product_material": "Wooden",
//     "product_name": "Unbranded Plastic Salad"
//   },
//   {
//     "product_material": "Concrete",
//     "product_name": "Gorgeous Cotton Keyboard"
//   },
//   {
//     "product_material": "Metal",
//     "product_name": "Incredible Steel Shirt"
//   },
//   {
//     "product_material": "Rubber",
//     "product_name": "Ergonomic Cotton Hat"
//   },
//   {
//     "product_material": "Cotton",
//     "product_name": "Small Soft Chair"
//   },
//   {
//     "product_material": "Fresh",
//     "product_name": "Incredible Metal Car"
//   },
//   {
//     "product_material": "Steel",
//     "product_name": "Licensed Plastic Bacon"
//   },
//   {
//     "product_material": "Soft",
//     "product_name": "Intelligent Cotton Chips"
//   },
//   {
//     "product_material": "Concrete",
//     "product_name": "Handcrafted Wooden Bacon"
//   },
//   {
//     "product_material": "Metal",
//     "product_name": "Unbranded Granite Chicken"
//   },
//   {
//     "product_material": "Rubber",
//     "product_name": "Ergonomic Soft Hat"
//   },
//   {
//     "product_material": "Cotton",
//     "product_name": "Intelligent Steel Pizza"
//   },
//   {
//     "product_material": "Frozen",
//     "product_name": "Tasty Rubber Cheese"
//   },
//   {
//     "product_material": "Cotton",
//     "product_name": "Licensed Steel Car"
//   }
// ]

// Find all products which contain the value of soft in product material
db.collection.find({
  product_material: "Soft",
});
// Output:
// [
//   {
//     "_id": ObjectId("5a934e000102030405000003"),
//     "id": "4",
//     "product_color": "plum",
//     "product_material": "Soft",
//     "product_name": "Gorgeous Plastic Pants",
//     "product_price": 492
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000008"),
//     "id": "9",
//     "product_color": "azure",
//     "product_material": "Soft",
//     "product_name": "Awesome Wooden Ball",
//     "product_price": 28
//   },
//   {
//     "_id": ObjectId("5a934e00010203040500000a"),
//     "id": "11",
//     "product_color": "black",
//     "product_material": "Soft",
//     "product_name": "Unbranded Wooden Cheese",
//     "product_price": 26
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000012"),
//     "id": "19",
//     "product_color": "azure",
//     "product_material": "Soft",
//     "product_name": "Intelligent Cotton Chips",
//     "product_price": 46
//   }
// ]

// Find products which contain product color indigo  and product price 492.00
db.collection.find({
  product_color: "indigo",
  product_price: 492,
});
// Output : no documents
db.collection.find({
  $or: [
    {
      product_color: "indigo",
    },
    {
      product_price: 492,
    },
  ],
});
//Output
// [
//   {
//     "_id": ObjectId("5a934e000102030405000001"),
//     "id": "2",
//     "product_color": "indigo",
//     "product_material": "Cotton",
//     "product_name": "Practical Fresh Sausages",
//     "product_price": 911
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000003"),
//     "id": "4",
//     "product_color": "plum",
//     "product_material": "Soft",
//     "product_name": "Gorgeous Plastic Pants",
//     "product_price": 492
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000009"),
//     "id": "10",
//     "product_color": "indigo",
//     "product_material": "Frozen",
//     "product_name": "Generic Wooden Pizza",
//     "product_price": 84
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000010"),
//     "id": "17",
//     "product_color": "indigo",
//     "product_material": "Fresh",
//     "product_name": "Incredible Metal Car",
//     "product_price": 36
//   },
//   {
//     "_id": ObjectId("5a934e000102030405000018"),
//     "id": "25",
//     "product_color": "indigo",
//     "product_material": "Cotton",
//     "product_name": "Licensed Steel Car",
//     "product_price": 20
//   }
// ]

// Delete the products which product price value are same
db.collection.deleteMany({
  $or: [
    {
      product_price: 36,
    },
    {
      product_price: 47,
    },
  ],
});
