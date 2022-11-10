const express = require('express')
const router = express.Router()

router.get('/contacts', (req, res) => {
    res.json(contacts)
})
router.get('/contact/:_id', (req, res)=> {
    const found = contacts.some(contacts=> contacts._id === parseInt(req.params._id));
    if(found) {
      res.json(contacts.filter(contacts => contacts._id === parseInt(req.params._id)));
    }
    else{
      res.status(400).json({ msg: `No member with the id of ${req.params._id} found`})
    }
})
router.post('/contacts', (req, res)=> {
    const newContact ={
        _id: uuid,
        name: req.body.name,
        occupation: req.body.occupation,
        avatar: req.body.avatar
    }
    if(!newContact.name || !newContact.occupation) {
        res.status(400).json({msg: 'Please include a name and occupation'});
      }
      contacts.push(newContact);
    res.json(contacts);
})

module.exports = router;