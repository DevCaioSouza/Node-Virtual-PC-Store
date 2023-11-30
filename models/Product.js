const conn = require('../db/conn');

class Product {
  constructor(name, price, description, category, image) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
}
