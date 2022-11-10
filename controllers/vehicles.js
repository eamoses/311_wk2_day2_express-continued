const {vehicles} = require('../data/vehicles')

const list = () => {
    // res.json(vehicles)
    res.send(vehicles)
}

const show = () => {
    const found = vehicles.some(vehicles=> vehicles._id === parseInt(req.params._id));
    if(found) {
        res.json(vehicles.filter(vehicles => vehicles._id === parseInt(req.params._id)));
    }
    else{
        res.status(400).json({ msg: `No member with the id of ${req.params._id} found`})
    }
}

const create = () => {
    const newVehicle ={
        _id: uuid,
        imgUrl: req.body.imgUrl,
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        price: req.body.price,
        km: req.body.km,
        miles: req.body.miles,
        fuel: req.body.fuel,
        city: req.body.city,
        isNew: req.body.isNew
    }
        vehicles.push(newVehicle);
    res.json(vehicles);
}

module.exports = { list, show, create }