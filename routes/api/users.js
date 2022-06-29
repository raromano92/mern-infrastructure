const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/check-token', usersCtrl.checkToken);

// POST /api/users
router.post('/', usersCtrl.create);

// DATA FROM FETCH CALL HITS HERE ON THE SERVER AND SENDS BACK TO USERSSVC
router.post('/login', usersCtrl.login);

router.get('./check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router;