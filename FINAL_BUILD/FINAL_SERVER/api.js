const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const  Db = require('./dboperations');

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());

//GET Requests
app.get('/Test', (req, res) => {
  Db.getOrders().then((data) => {
    console.log('GET Request Received')
    res.send(data[0]);
  })
});

//POST Requests
app.post('/Test', function(req, res) {
  console.log('POST Request Received')
  let order = {...req.body}
  Db.addOrder(order.order)
  res.end();
});

//Listen
app.listen(3001, function(){
  console.log('server is running on port 3001');
})