const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
    res.json(products)
})
router.get('/product/:_id', (req, res)=> {
    const found = products.some(products=> products._id === parseInt(req.params._id));
    if(found) {
      res.json(products.filter(products => products._id === parseInt(req.params._id)));
    }
    else{
      res.status(400).json({ msg: `No member with the id of ${req.params._id} found`})
    }
})
router.post('/products', (req, res)=> {
    const newProduct ={
        _id: uuid,
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        imgUrl: req.body.imgUrl,
        price: req.body.price,
        category: req.body.category,
        reviews: [req.body.reviews.description, req.body.reviews.rating]
    }
      products.push(newProduct);
    res.json(products);
})

module.exports = router;