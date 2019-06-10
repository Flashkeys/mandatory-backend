let express = require('express');
let router = express.Router();

const chatrooms = [];

router.get('/', function (req, res) {
    res.send(chatrooms);
});


router.post('/', function (req, res) {
    const chatroom = req.body
    console.log(chatroom);
    chatrooms.push(chatroom.id);
    res.end("succes")
});



module.exports = router;
