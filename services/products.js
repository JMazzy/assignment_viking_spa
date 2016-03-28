store.factory('Products', function(){

  var obj = {};

  var _categories = [];
  var _products = [];

  for ( var i = 0; i < 10; i++ ) {

    var cat = { name: faker.commerce.department(), id: i };

    _categores.push(cat);

  }

  for ( var i = 0; i < 25; i++ ) {

    var product = { name: faker.commerce.productName(), id: i, categoryID: Math.floor(Math.random() * 10), price: faker.commerce.price(), description: faker.lorem.paragraph(), photo: faker.image.business() };

    _products.push(product);
  }



  return obj;

});
