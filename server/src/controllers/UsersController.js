const { UsersModel } = require('../models');



const getAll = (req, res) => {
  UsersModel.getAll()
    .then(users => {
      if (users.length === 0) {
        return res.status(200).send({ message: 'No Users' });
      }

      res.status(200).send({ message: 'List of all the users', users });
    })
    .catch(error => {
      console.log(error.message);
      res
        .status(500)
        .send({ message: 'Error reading users', error: error.message });
    });
};





module.exports = { getAll };
