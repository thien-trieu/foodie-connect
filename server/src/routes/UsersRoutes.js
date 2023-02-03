const express = require('express');

const { create, getByEmail } = require('../models/UsersModel')

const { UsersController } = require('../controllers');

const router = express.Router();


router.get('/', UsersController.getAll);

router.post('/register', (req,res) => {

  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  const location = req.body.location


  create(name, email, password, location)
    .then(getByEmail(email))
    .then(user =>{

      console.log('Got the user?', user)
      return res.send(user)
    })

})

module.exports = router;