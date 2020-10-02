var express = require('express');
var router = express.Router();
var operations = require("../operations");

router.get('/list/all', function (req, res) {
  let orders = operations.getAllOrders();
  res.send(orders);
});
router.get('/search', function (req, res) {
  console.log(req.query);
  let orders = operations.searchOrders(req.query.name);
  res.send(orders);

});

router.post('/order', function (req, res) {
  console.log(req.body);
  let orders = operations.addToOrders(req.body);
  res.send({
    status: "Success"
  });
});

module.exports = router;