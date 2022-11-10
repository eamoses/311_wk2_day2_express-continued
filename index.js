const express = require("express");
const bodyParser = require("body-parser");
// const { uuid } = require('uuid');
// const { uuid } = require('uuid');
const app = express();
const port = process.env.PORT || 4001;
const {comments} = require('./routes/comments.js')
const {contacts} = require('./routes/contacts.js')
const {vehicles} = require('./routes/vehicles.js')
const {products} = require('./routes/products.js');
// const router = require("./routes/comments.js");

app.use(express.static('public'))
app.use(bodyParser.json())

app.use("/comments", comments)
app.use("/contacts", contacts)
app.use("/vehicles", vehicles)
app.use("/products", products)

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
