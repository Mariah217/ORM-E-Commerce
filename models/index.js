// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
})
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  onUpdate: 'CASCADE'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: ProductTag,
  foreignKey: 'product_id',
  onUpdate: 'CASCADE'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onUpdate: 'CASCADE'
})

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag,
};
