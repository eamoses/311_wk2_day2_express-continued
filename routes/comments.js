const express = require('express')
const router = express.Router()

router.get('/comments', (req, res) => {
    res.json(comments)
})
router.get('/comment/:_id', (req, res)=> {
    const found = comments.some(comments=> comments._id === parseInt(req.params._id));
    if(found) {
      res.json(comments.filter(comments => comments._id === parseInt(req.params._id)));
    }
    else{
      res.status(400).json({ msg: `No member with the id of ${req.params._id} found`})
    }
})
router.post('/comments', (req, res)=> {
    const newComment ={
        _id: uuid,
        body: req.body.body,
        postId: req.body.postId
    }
    if(!newComment.body || !newComment.postId) {
        res.status(400).json({msg: 'Please include a body and postId'});
      }
    comments.push(newComment);
    res.json(comments);
})

module.exports = router;