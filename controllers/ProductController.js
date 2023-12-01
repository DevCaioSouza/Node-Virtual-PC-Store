const Product = require('../models/Product');

module.exports = class ProductController {
  static showProducts(req, res) {
    res.render('layouts/main');
  }

  static createProduct(req, res) {
    res.render('products/create');
  }

  static createProductPost(req, res) {
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const category = req.body.category;

    const product = new Product(name, price, description, category);

    product.save();

    res.redirect('/create')
  }
};
