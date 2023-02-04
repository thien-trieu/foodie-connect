const express = require('express');

const { createUser, getByEmail } = require('../models/UsersModel')

const { UsersController } = require('../controllers');

const router = express.Router();


router.get('/', UsersController.getAll);

router.post('/register', (req,res) => {

  const {name, email, password, location } = req.body

  createUser(name, email, password, location)
    .then(getByEmail(email))
    .then(user =>{

      console.log('Got the user?', user)
      return res.send(user)
    })

})

router.post('/login', (req,res) => {

  const { email, password } = req.body
  getByEmail(email)
    .then(user =>{

      if (user.password !== password){
        return res.send("Invalid Creditials")
      }
      console.log('Got the user?', user)
      return res.send(user)
    })

})

module.exports = router;