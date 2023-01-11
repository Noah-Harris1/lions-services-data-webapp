const  sql = require('mssql');

//Sql Database Configuration
const  config = {
  user:  'website_login', // sql user
  password:  '5TYt8#kA3s*jvtMEa0DC3PP^', //sql user password
  server:  '127.0.0.1', // if it does not work try- localhost
  database:  'Production',
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
  },
  port:  1433
}

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
  addOrder:  addOrder
}