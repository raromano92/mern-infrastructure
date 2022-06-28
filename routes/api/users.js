const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')

// POST /api/users
router.post('/', usersCtrl.create);

// DATA FROM FETCH CALL HITS HERE ON THE SERVER AND SENDS BACK TO USERSSVC
router.post('/login', usersCtrl.login);

module.exports = router;