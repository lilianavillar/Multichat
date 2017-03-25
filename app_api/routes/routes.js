/**
 * Created by UO232510 on 21/03/2017.
 */
var express = require('express');
var userCtrl = require('../controllers/userCtrl');
var router = express.Router();

//authentication
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.put('/profile', userCtrl.profile);
router.get('/users/:userId', userCtrl.users);
router.delete('/delete/:userId', userCtrl.delete);

module.exports = router;
