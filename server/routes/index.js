const express = require('express');
const registerUser = require('../controllers/registerUser');
const checkEmail = require('../controllers/checkEmail');
const checkPassword = require('../controllers/checkPassword');
const userDetails = require('../controllers/userDetails');
const logout = require('../controllers/logout');
const router = express.Router();

// create user api
router.post('/register', registerUser)

// check user email
router.post('/email', checkEmail)

// check user password
router.post('/password', checkPassword)

// login user details
router.get('/user-details', userDetails)

// logout user
router.get('/logout', logout)

module.exports = router