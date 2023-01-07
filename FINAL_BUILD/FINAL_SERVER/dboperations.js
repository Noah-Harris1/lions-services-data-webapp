var  config = require('./dbconfig');
const  sql = require('mssql');

async  function  getOrders() {
  try {
    let  pool = await  sql.connect(config);
    let  products = await  pool.request().query("SELECT * from Orders");
    return  products.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  getOrder(productId) {
  try {
    let  pool = await  sql.connect(config);
    let  product = await  pool.request()
    .input('input_parameter', sql.Int, productId)
    .query("SELECT * from Orders where Id = @input_parameter");
    return  product.recordsets;
  }
  catch (error) {
    console.log(error);
  }
}

async  function  addOrder(order) {
  try {
    let  pool = await  sql.connect(config);
    let  insertProduct = await  pool.request()
    .input('Id', sql.Int, order.id)
    .input('Title', sql.NVarChar, order.title)
    .input('Quantity', sql.Int, order.quantity)
    .input('Message', sql.NVarChar, order.message)
    .input('City', sql.NVarChar, order.city)
    
    .query("INSERT INTO Orders VALUES (@Id, @Title, @Quantity, @Message, @City);")
    return  insertProduct.recordsets;
  }
  catch (err) {
    console.log(err);
  }
}

module.exports = {
  getOrders:  getOrders,
  getOrder:  getOrder,
  addOrder:  addOrder
}