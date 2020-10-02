fs = require('fs');
var orders_file = require('./data/orders.json');
var orders = orders_file;

var addToOrders = function (order) {
  let new_orders = orders;
  for (var i = 0; i < order.length; i++) {
    new_orders.push(order[i]);
  }
  fs.writeFile('./data/orders.json', JSON.stringify(new_orders), function (err) {
    if (err) return err;
    return "done";
  });
}
var getAllOrders = function () {
  return orders;
}

var searchOrders = function (name) {
  if (name) {
    let new_orders = orders.filter((i => i.salesPerson === name));
    return new_orders;
  } else {
    return orders;
  }
}
module.exports = {
  addToOrders: addToOrders,
  getAllOrders: getAllOrders,
  searchOrders: searchOrders
}