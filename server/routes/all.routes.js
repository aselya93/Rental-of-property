const router = require('express').Router();
const { User } = require('../db/models');
const path = require('path');
const bcrypt = require('bcrypt');

const saltRounds = 10;



module.exports = router