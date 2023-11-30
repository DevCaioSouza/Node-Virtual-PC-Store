module.exports = class ProductController {
  static showProducts(req, res) {
    res.render('layouts/main');
  }

  static createProduct(req, res) {
    res.render('products/create');
  }
};
