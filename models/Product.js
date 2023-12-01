const conn = require('../db/conn');
class Product {
  constructor(name, price, description, category) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
  }

  save() {
    const product = conn.db().collection('produtos').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
      category: this.category,
    });

    return product;
  }
}

module.exports = Product;
